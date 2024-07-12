import CustomTable from "@/components/customtable";
import CustomSquare from "@/components/square";

const Survey = () => {
  const dummyUsers = [
    {
      userType: "Job Seeking",
      count: "2",
    },
    {
      userType: "Partnership",
      count: "1",
    },
    {
      userType: "Services",
      count: "4",
    },
  ];
  return (
    <div className="w-full h-screen flex flex-col p-10">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyUsers.map((user) => (
          <CustomSquare count={user.count} userType={user.userType} />
        ))}
      </div>
      <CustomTable />
    </div>
  );
};
export default Survey;
