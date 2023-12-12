import { Table, TableHead, TableBody } from "@mui/material";
import { DataTableColumn, DataRecord } from "../../config/typings";
import { DataTableHeadCell } from "./DataTableHeadCell";
import { DataTableRow } from "./DataTableRow";

interface DataTableProps {
  columns: Array<DataTableColumn>;
  records: Array<DataRecord>;
  handleSortChange: (newSort: keyof DataRecord) => void;
  orderBy: keyof DataRecord;
  orderDirection: "asc" | "desc";
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  records,
  orderBy,
  orderDirection,
  handleSortChange,
}) => {
  return (
    <Table>
      <TableHead>
        {columns.map((column) => {
          return (
            <DataTableHeadCell
              column={column}
              active={column.id === orderBy}
              handleSortChange={handleSortChange}
              orderDirection={column.id === orderBy ? orderDirection : "asc"}
            />
          );
        })}
      </TableHead>
      <TableBody>
        {records.map((record) => (
          <DataTableRow columns={columns} record={record} />
        ))}
      </TableBody>
    </Table>
  );
};
