export const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "type",
      header: "Type",
      enableColumnFilter: true,
      filterFn: (row, columnId, filterValue) => {
        if (filterValue.length === 0) return true; // No filter applied
        const cellValue = row.getValue(columnId);
        return filterValue.includes(cellValue);
      },
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
  
  export const columnWithoudId = columns.filter((column) => column.accessorKey !== "id");
  