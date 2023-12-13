import {
  Table,
  TableHead,
  TableBody,
  Alert,
  TablePagination,
} from "@mui/material";
import { DataTableColumn, DataRecord } from "../../config/typings";
import { DataTableHeadCell } from "./DataTableHeadCell";
import { DataTableRow } from "./DataTableRow";
interface DataTableProps {
  columns: Array<DataTableColumn>;
  records: Array<DataRecord>;
  sort: DataTableSort;
  handleSortChange: (newSort: keyof DataRecord) => void;
  pagination: DataTablePaginationState;
  recordCount: number;
  handlePaginationChange: (page: number, pageSize: number) => void;
}

export interface DataTableSort {
  orderBy: keyof DataRecord;
  direction: "asc" | "desc";
}

export interface DataTablePaginationState {
  page: number;
  pageSize: number;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  records,
  sort,
  handleSortChange,
  pagination,
  recordCount,
  handlePaginationChange,
}) => {
  const handlePageChange = (page: number) => {
    handlePaginationChange(page, pagination.pageSize);
  };

  const handlePageSizeChange = (pageSize: number) => {
    console.log("Page Size Change");
    handlePaginationChange(0, pageSize);
  };

  if (records.length > 0) {
    return (
      <>
        <Table>
          <TableHead>
            {columns.map((column) => {
              return (
                <DataTableHeadCell
                  column={column}
                  active={column.id === sort.orderBy}
                  handleSortChange={handleSortChange}
                  orderDirection={
                    column.id === sort.orderBy ? sort.direction : "asc"
                  }
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
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={recordCount}
          rowsPerPage={pagination.pageSize}
          page={pagination.page}
          onPageChange={(event, page) => handlePageChange(page)}
          onRowsPerPageChange={(event) =>
            handlePageSizeChange(Number(event.target.value))
          }
        />
      </>
    );
  }

  return (
    <>
      <Alert severity="info">No Data Found</Alert>
    </>
  );
};
