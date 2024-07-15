import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import LoaderComponent from "../LoaderComponent";
import { columnWithoudId } from "./column";
import useTableData from "./useTableData";

const CustomTable = () => {
  const { error, loading, tableData } = useTableData();

  const [columnFilters, setColumnFilters] = useState([]);
  const filterOptions = ["partner", "service", "job"];
  const [filter, setFilter] = useState("");

  const table = useReactTable({
    data: tableData?.user,
    columns: columnWithoudId,
    pageCount: Math.ceil(tableData?.user?.length / 5),
    state: {
      columnFilters,
      globalFilter: filter,
    },
    initialState: { pagination: { pageSize: 5 } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFilter,
  });

  const handleExport = () => {
    const headers = columnWithoudId.map((column) => column.header);
    const filteredData = table
      .getFilteredRowModel()
      .rows.map((row) => row.original);
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += headers.join(",") + "\r\n";
    filteredData.forEach((row) => {
      let rowArray = columnWithoudId.map((column) => row[column.accessorKey]);
      let rowString = rowArray.join(",");
      csvContent += rowString + "\r\n";
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "table_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFilterChange = (filter) => {
    setColumnFilters((prev) => {
      const existingFilter = prev.find((f) => f.id === "user_type");
      const newFilterValue = existingFilter ? existingFilter.value : [];
      if (newFilterValue.includes(filter)) {
        return prev.map((f) =>
          f.id === "user_type"
            ? { ...f, value: newFilterValue.filter((v) => v !== filter) }
            : f
        );
      } else {
        return prev
          .map((f) =>
            f.id === "user_type"
              ? { ...f, value: [...newFilterValue, filter] }
              : f
          )
          .concat(
            !existingFilter ? [{ id: "user_type", value: [filter] }] : []
          );
      }
    });
  };

  if (loading) return <LoaderComponent />;
  if (error) return "Something went wrong!";

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Type Filter <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {filterOptions.map((option) => (
              <DropdownMenuCheckboxItem
                key={option}
                className="capitalize"
                checked={columnFilters
                  .find((f) => f.id === "user_type")
                  ?.value.includes(option)}
                onCheckedChange={() => handleFilterChange(option)}
              >
                {option}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" onClick={handleExport} className="ml-4">
          Export
        </Button>
      </div>
      <div className="rounded-md border lg:h-[45vh]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="capitalize">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columnWithoudId.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <span>
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>{" "}
        </span>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
