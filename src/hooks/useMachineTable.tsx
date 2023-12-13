import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { DataRecord } from "../config/typings";
import {
  DataTablePaginationState,
  DataTableSort,
} from "../components/DataTable/DataTable";

interface useMachineTableReturn {
  machines: DataRecord[] | undefined;
  isLoading: boolean;
  error: Error | null;
  pagination: DataTablePaginationState;
  sort: DataTableSort;
  recordCount: number;
  handlePaginationChange: (page: number, pageSize: number) => void;
  handleSortChange: (newSort: keyof DataRecord) => void;
}

const useMachineTable = (
  initialSortBy: keyof DataRecord = "nvo_name",
  initialSortDirection: "asc" | "desc" = "asc"
): useMachineTableReturn => {
  const [sort, setSort] = useState<DataTableSort>({
    orderBy: initialSortBy,
    direction: initialSortDirection,
  });
  const [pagination, setPagination] = useState<DataTablePaginationState>({
    page: 0,
    pageSize: 5,
  });

  const [recordCount, setRecordCount] = useState<number>(0);

  const [error, setError] = useState<Error | null>(null);

  const machines = useLiveQuery(async () => {
    try {
      // Apply sorting
      let queryOrderBy = sort.orderBy.toString();
      if (queryOrderBy === "factoryline") {
        queryOrderBy = "nvo_factorylineid_name";
      } else if (queryOrderBy === "location") {
        queryOrderBy = "nvo_locationid_name";
      }

      //TODO: FILTER IMPLEMENTATION

      //Sorting
      let collection = db.nvo_machines.orderBy(queryOrderBy);
      if (sort.direction !== "asc") {
        collection = collection.reverse();
      }

      //GET Record Count¨
      setRecordCount(await collection.count());

      //calculate offset
      const offset = pagination.page * pagination.pageSize;
      const fetchedMachines = await collection
        .offset(offset)
        .limit(pagination.pageSize)
        .toArray();

      // Fetch the primary data

      // Process each machine to fetch additional data
      const processedMachines = fetchedMachines.map(async (machine) => {
        const location = machine.nvo_locationid
          ? await db.nvo_locations.get(machine.nvo_locationid)
          : undefined;
        return {
          id: machine.id,
          nvo_name: machine.nvo_name,
          nvo_serialnumber: machine.nvo_serialnumber,
          nvo_machinehours: machine.nvo_machinehours,
          nvo_machinehourssinceservice: machine.nvo_machinehourssinceservice,
          location: location ? location.nvo_name : "---",
          factoryline: machine.nvo_factorylineid
            ? machine.nvo_factorylineid_name
            : "---",
        };
      });
      console.log("exec query");

      // Wait for all processing to complete
      return await Promise.all(processedMachines);
    } catch (err) {
      setError(err as Error);
    }
  }, [sort, pagination]);

  const isLoading = machines === undefined;

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPagination({ page, pageSize });
  };

  const handleSortChange = (orderBy: keyof DataRecord) => {
    const direction =
      sort.orderBy === orderBy
        ? sort.direction === "asc"
          ? "desc"
          : "asc"
        : "asc";
    setSort({ orderBy, direction });
    setPagination((previousState) => ({ ...previousState, page: 0 }));
  };

  return {
    machines,
    isLoading,
    error,
    sort,
    pagination,
    recordCount,
    handleSortChange,
    handlePaginationChange,
  };
};

export default useMachineTable;
