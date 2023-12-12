import {
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
  Paper,
} from "@mui/material";
import { GridFour } from "@phosphor-icons/react";
import { Table } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { MachineTiles } from "../components/MachineTiles";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { DataTableColumn, DataRecord } from "../config/typings";
import { DataTable } from "../components/DataTable/DataTable";
import useMachineTable from "../hooks/useMachineTable";

enum ToggleButtonValue {
  tiles,
  table,
}

const machineTableColumns: Array<DataTableColumn> = [
  {
    label: "Name",
    id: "nvo_name",
  },
  {
    label: "Serial Number",
    id: "nvo_serialnumber",
  },
  {
    label: "Location",
    id: "location",
  },
  {
    label: "Factory Line",
    id: "factoryline",
  },
  {
    label: "Machine Hours",
    id: "nvo_machinehours",
  },
  {
    label: "Machine Hours since Service",
    id: "nvo_machinehourssinceservice",
  },
];

export const Home = () => {
  const [display, setDisplay] = useState<ToggleButtonValue>(
    ToggleButtonValue.table
  );

  const {
    machines,
    isLoading,
    error,
    orderBy,
    orderDirection,
    handleSortChange,
  } = useMachineTable();
  if (!machines) {
    return <div>Loading...</div>;
  }

  const handleDisplay = (
    event: React.MouseEvent<HTMLElement>,
    value: ToggleButtonValue
  ) => {
    setDisplay(value);
  };
  return (
    <>
      <Typography variant="h1">Hi James,</Typography>
      <Paper sx={{ p: 2 }}>
        <Stack direction="row">
          <Typography variant="h1">Machine Overview</Typography>
          <ToggleButtonGroup
            value={display}
            onChange={handleDisplay}
            exclusive
            sx={{
              ml: "auto",
            }}
          >
            <ToggleButton value={ToggleButtonValue.tiles}>
              <GridFour size={24} />
            </ToggleButton>
            <ToggleButton value={ToggleButtonValue.table}>
              <Table size={24} />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        {display === ToggleButtonValue.tiles && <MachineTiles />}
        {display === ToggleButtonValue.table && (
          <DataTable
            columns={machineTableColumns}
            records={machines}
            handleSortChange={handleSortChange}
            orderBy={orderBy}
            orderDirection={orderDirection}
          />
        )}
      </Paper>
    </>
  );
};
