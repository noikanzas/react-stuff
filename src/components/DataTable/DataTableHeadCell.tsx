import { TableCell, TableSortLabel } from "@mui/material";
import { DataTableColumn, DataRecord } from "../../config/typings";

interface DataTableHeadCellProps {
  column: DataTableColumn;
  active: boolean;
  orderDirection: "asc" | "desc";
  handleSortChange: (newSort: keyof DataRecord) => void;
}

export const DataTableHeadCell: React.FC<DataTableHeadCellProps> = ({
  column,
  active,
  orderDirection,
  handleSortChange,
}) => {
  return (
    <TableCell key={String(column.id)}>
      <TableSortLabel
        active={active}
        direction={orderDirection}
        onClick={() => handleSortChange(column.id)}
      >
        {column.label}
      </TableSortLabel>
    </TableCell>
  );
};
