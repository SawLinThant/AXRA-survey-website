import { GET_USERS } from "@/graphql/queries/userQueries";
import { useQuery } from "@apollo/client";

const useTableData = () => {
  const { loading, error, data: tableData } = useQuery(GET_USERS);

  return { error, loading, tableData };
};

export default useTableData;
