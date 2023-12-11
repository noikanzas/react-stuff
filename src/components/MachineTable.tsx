import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Typography,
} from "@mui/material";

import { Machine } from "../config/typings";

interface MachineTableProps {
  items: Array<Machine>;
}

export const MachineTable: React.FC<MachineTableProps> = ({ items }) => {
  return (
    <>
      <Table sx={{ mt: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Serial Number</TableCell>
            <TableCell>Machine Hours</TableCell>
            <TableCell>Machine Hours since Service</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => {
            return (
              <TableRow key={item.nvo_machineId}>
                <TableCell>{item.nvo_name}</TableCell>
                <TableCell>{item.nvo_serialnumber}</TableCell>
                <TableCell>{item.nvo_machinehours}</TableCell>
                <TableCell>{item.nvo_machinehourssinceservice}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
