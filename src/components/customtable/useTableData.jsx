import { GET_USERS } from "@/graphql/queries/userQueries";
import { useQuery } from "@apollo/client";

const useTableData = () => {
  const { loading, error, data: tableData } = useQuery(GET_USERS);

  // const tableData = [
  //   {
  //     id: "q3590t4jq03jt43",
  //     name: "Saw",
  //     email: "saw@gmail.com",
  //     type: "job",
  //     detail: "detail",
  //   },
  //   {
  //     id: "q3590t4jq03jt43",
  //     name: "Lin",
  //     email: "lin@gmail.com",
  //     type: "partner",
  //     detail: "detail",
  //   },
  //   {
  //     id: "q3590t4jq03jt43",
  //     name: "Thant",
  //     email: "thant@gmail.com",
  //     type: "service",
  //     detail: "detail",
  //   },
  // ];
  return { error, loading, tableData };
};

export default useTableData;
