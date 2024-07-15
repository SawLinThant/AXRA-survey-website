export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "User Name or Company's Name",
  },

  {
    accessorKey: "user_type",
    header: "Type",
    enableColumnFilter: true,
    filterFn: (row, columnId, filterValue) => {
      if (filterValue.length === 0) return true;
      const cellValue = row.getValue(columnId);
      return filterValue.includes(cellValue);
    },
  },
  {
    accessorKey: "content_infromation",
    header: "Content Information",
  },
  {
    accessorKey: "detail",
    header: "Detail",
    cell: ({ cell }) => {
      const id = cell.row.original.id;
      return (
        <a href={`/detail/${id}`} className="text-blue-500 hover:underline">
          {cell.getValue()}
        </a>
      );
    },
  },
];

export const columnWithoudId = columns.filter(
  (column) => column.accessorKey !== "id"
);
