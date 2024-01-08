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
import { DataTableColumn } from "../config/typings";
import { DataTable } from "../components/DataTable/DataTable";
import useMachineTable from "../hooks/useMachineTable";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/').createRoute({
  component: HomeComponent,
});

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

function HomeComponent() {
  const [display, setDisplay] = useState<ToggleButtonValue>(
    ToggleButtonValue.table
  );

  const {
    machines,
    isLoading,
    error,
    sort,
    pagination,
    recordCount,
    handleSortChange,
    handlePaginationChange,
  } = useMachineTable();

  if (error) {
    console.log("error in Home", error);
    return <div>Whoopsie: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleDisplay = (
    event: React.MouseEvent<HTMLElement>,
    value: ToggleButtonValue
  ) => {
    setDisplay(value);
  };
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row">
        <Typography variant="h2">Machine Overview</Typography>
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
          sort={sort}
          handleSortChange={handleSortChange}
          pagination={pagination}
          handlePaginationChange={handlePaginationChange}
          recordCount={recordCount}
        />
      )}
    </Paper>
  );
}
