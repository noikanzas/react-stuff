import { useEffect, useState } from "react";
import { db } from "../db";
import { Machine } from "../config/typings";

interface DataSyncReturn {
  isSyncing: boolean;
  lastSyncTime: Date | null;
}

interface ServerResponseJSON {
  moreRecords: boolean;
  pagingCookieEncoded: string;
  page: number;
  results: Array<Machine>;
}

export const useDataSync = (): DataSyncReturn => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState(null);

  async function syncData() {
    setIsSyncing(true);

    try {
      let moreRecords = true;
      let pagingcookie = null;
      let page = 1;
      do {
        const serverData = await fetchDataFromServer(page, pagingcookie);
        moreRecords = serverData.moreRecords;
        pagingcookie = serverData.pagingCookieEncoded;
        page++;
        await updateLocalData(serverData.results);
      } while (moreRecords === true);
    } catch (error) {
      console.error("Sync failed:", error);
    }

    setIsSyncing(false);
    setLastSyncTime(new Date());
  }

  useEffect(() => {
    syncData();

    const interval = setInterval(syncData, 15 * 60 * 1000); // 15 minutes

    return () => clearInterval(interval);
  }, []);

  return { isSyncing, lastSyncTime };
};

const fetchDataFromServer = async (
  page: number,
  pagingCookieEncoded: string
): Promise<ServerResponseJSON> => {
  let url = `/api/machines?page=${page}`;
  if (pagingCookieEncoded) {
    url += `&paging-cookie=${pagingCookieEncoded}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json(); // assuming the server responds with JSON
};

const updateLocalData = async (serverData: Array<Machine>) => {
  await db.transaction("rw", db.nvo_machines, async () => {
    for (const machine of serverData) {
      await db.nvo_machines.put(machine);
    }
  });
};
