import { TableRow, TableCell } from "@mui/material";
import { DataTableColumn, DataRecord } from "../../config/typings";

interface DataTableRowProps {
  columns: Array<DataTableColumn>;
  record: DataRecord;
}

export const DataTableRow: React.FC<DataTableRowProps> = ({
  columns,
  record,
}) => {
  return (
    <TableRow key={record.id}>
      {columns.map((column) => {
        return <TableCell>{record[column.id]}</TableCell>;
      })}
    </TableRow>
  );
};
