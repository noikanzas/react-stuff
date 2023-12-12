import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { DataRecord } from "../config/typings";

interface useMachineTableReturn {
  machines: DataRecord[] | undefined;
  isLoading: boolean;
  error: Error | null;
  orderBy: keyof DataRecord;
  orderDirection: "asc" | "desc";
  handleSortChange: (newSort: keyof DataRecord) => void;
}

const useMachineTable = (
  initialSortBy: keyof DataRecord = "nvo_name",
  initialSortDirection: "asc" | "desc" = "asc"
): useMachineTableReturn => {
  const [orderBy, setOrderBy] = useState<keyof DataRecord>(initialSortBy);
  const [orderDirection, setOrderDirection] = useState<"asc" | "desc">(
    initialSortDirection
  );
  const [error, setError] = useState<Error | null>(null);

  const machines = useLiveQuery(async () => {
    try {
      let queryOrderBy = orderBy.toString();
      if (queryOrderBy === "factoryline") {
        queryOrderBy = "nvo_factorylineid.name";
      } else if (queryOrderBy === "location") {
        queryOrderBy = "nvo_locationid.name";
      }

      let query = db.nvo_machines.orderBy(queryOrderBy);
      if (orderDirection !== "asc") {
        query = query.reverse();
      }

      const fetchedMachines = await query.toArray();
      return await Promise.all(
        fetchedMachines.map(async (machine) => {
          const location = await db.nvo_locations.get(
            machine.nvo_locationid.id
          );
          return {
            id: machine.nvo_machineId,
            nvo_name: machine.nvo_name,
            nvo_serialnumber: machine.nvo_serialnumber,
            nvo_machinehours: machine.nvo_machinehours,
            nvo_machinehourssinceservice: machine.nvo_machinehourssinceservice,
            location: location ? location.nvo_name : "---",
            factoryline: machine.nvo_factorylineid
              ? machine.nvo_factorylineid.name
              : "---",
          };
        })
      );
    } catch (err) {
      setError(err as Error);
    }
  }, [orderBy, orderDirection]);

  const isLoading = machines === undefined;

  const handleSortChange = (newSort: keyof DataRecord) => {
    if (orderBy === newSort) {
      setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(newSort);
      setOrderDirection("asc");
    }
  };

  return {
    machines,
    isLoading,
    error,
    orderBy,
    orderDirection,
    handleSortChange,
  };
};

export default useMachineTable;
