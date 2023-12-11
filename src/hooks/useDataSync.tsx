import { useEffect, useState } from "react";
import { db } from "../db";
import { FactoryLine, Machine } from "../config/typings";
import { Dexie } from "dexie";

interface SyncConfig {
  [endpoint: string]: Dexie.Table<EntityData, number>;
}

type EntityData = Machine | FactoryLine | Location;

interface DataSyncReturn {
  isSyncing: boolean;
  lastSyncTime: Date | null;
}

interface ServerResponseJSON {
  moreRecords: boolean;
  pagingCookieEncoded: string;
  page: number;
  results: Array<EntityData>;
}

const syncConfig = {
  "/api/nvo_machines": db.nvo_machines,
  "/api/nvo_locations": db.nvo_locations,
  "/api/nvo_factorylines": db.nvo_factorylines,
};

export const useDataSync = (): DataSyncReturn => {
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);

  async function syncDataForEndpoint(
    endpoint: string,
    table: Dexie.Table<any, any>
  ) {
    let moreRecords = true;
    let pagingcookie: string | null = null;
    let page = 1;
    do {
      const serverData = await fetchDataFromServer(
        endpoint,
        page,
        pagingcookie
      );
      moreRecords = serverData.moreRecords;
      pagingcookie = serverData.pagingCookieEncoded;
      page++;
      await updateLocalData(serverData.results, table);
    } while (moreRecords);
  }

  async function syncAllData() {
    setIsSyncing(true);
    try {
      for (const [endpoint, table] of Object.entries(syncConfig)) {
        await syncDataForEndpoint(endpoint, table);
      }
    } catch (error) {
      console.error("Sync failed:", error);
    }
    setIsSyncing(false);
    setLastSyncTime(new Date());
  }

  useEffect(() => {
    syncAllData();

    const interval = setInterval(syncAllData, 5 * 60 * 1000); // 15 minutes
    return () => clearInterval(interval);
  }, []);

  return { isSyncing, lastSyncTime };
};

const fetchDataFromServer = async (
  apiEndpoint: string,
  page: number,
  pagingCookieEncoded: string | null
): Promise<ServerResponseJSON> => {
  let url = `${apiEndpoint}?page=${page}`;
  if (pagingCookieEncoded) {
    url += `&paging-cookie=${pagingCookieEncoded}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

const updateLocalData = async (
  serverData: Array<EntityData>,
  table: Dexie.Table<any, any>
) => {
  await db.transaction("rw", table, async () => {
    for (const item of serverData) {
      await table.put(item);
    }
  });
};
