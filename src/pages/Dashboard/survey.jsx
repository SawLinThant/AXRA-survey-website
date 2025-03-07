import CustomTable from "@/components/customtable";
import LoaderComponent from "@/components/LoaderComponent";
import CustomSquare from "@/components/square";
import { GET_AVG_COUNTS } from "@/graphql/queries/userQueries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const Survey = () => {
  const { data, error, loading, refetch } = useQuery(GET_AVG_COUNTS);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000); // Refetch every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [refetch]);

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
    <div className="w-full h-screen flex flex-col p-10 bg-background_color">
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
