import CustomTable from "@/components/CustomTable/index";
import LoaderComponent from "@/components/LoaderComponent";
import CustomSquare from "@/components/Square";
import { GET_AVG_COUNTS } from "@/graphql/queries/userQueries";
import { useQuery } from "@apollo/client";

const Survey = () => {
  const { data, error, loading } = useQuery(GET_AVG_COUNTS);

  if (loading) return <LoaderComponent />;
  if (error) return "Fail to get users!";

  const { client_aggregate, job_seeker_aggregate, partner_aggregate } = data;

  const avgUsers = [
    {
      userType: "Job Seeking",
      count: job_seeker_aggregate?.aggregate?.count,
    },
    {
      userType: "Partnership",
      count: partner_aggregate?.aggregate?.count,
    },
    {
      userType: "Services",
      count: client_aggregate?.aggregate?.count,
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col p-10 bg-background_color dark:bg-background-dark">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {avgUsers.map((user) => (
          <CustomSquare
            key={Math.random()}
            count={user.count}
            userType={user.userType}
          />
        ))}
      </div>
      <CustomTable />
    </div>
  );
};
export default Survey;
