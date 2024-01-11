import {
  Table,
  TableHead,
  TableBody,
  Alert,
  TablePagination,
  Stack,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { DataTableColumn, DataRecord } from "../../config/typings";
import { DataTableHeadCell } from "./DataTableHeadCell";
import { DataTableRow } from "./DataTableRow";
import { X } from "@phosphor-icons/react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

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
        <DataTableFilter />
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
          rowsPerPageOptions={[20, 50]}
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

interface DataTableFilterItem {
  label: string;
  type: "search" | "select";
}

const DataTableFilter = () => {
  const locations = useLiveQuery(() => db.nvo_locations.toArray());

  if (!locations) {
    return <div>Loading or Error</div>;
  }
  return (
    <Stack
      sx={{ my: 2 }}
      direction="row"
      gap="2"
      justifyContent="space-between"
    >
      <Stack direction="row" gap={2}>
        <TextField label="Search" variant="outlined"></TextField>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel> Location</InputLabel>
          <Select label="Location" variant="outlined">
            <MenuItem value=" "></MenuItem>
            {locations.map((location) => (
              <MenuItem value={location.id}>{location.nvo_name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Button variant="outlined" startIcon={<X size={24} />}>
        Clear
      </Button>
    </Stack>
  );
};
