import {
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
} from "@mui/material";
import { GridFour } from "@phosphor-icons/react";
import { Table } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { MachineTiles } from "../components/MachineTiles";
import { MachineTable } from "../components/MachineTable";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";

enum ToggleButtonValue {
  tiles,
  table,
}

export const Home = () => {
  const [display, setDisplay] = useState<ToggleButtonValue>(
    ToggleButtonValue.table
  );

  const machines = useLiveQuery(() => db.nvo_machines.toArray());

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
      <Stack
        direction="row"
        sx={{
          width: "100%",
        }}
      >
        <Typography variant="h1">Fleet Overview</Typography>
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
      {display === ToggleButtonValue.table && <MachineTable items={machines} />}
    </>
  );
};
