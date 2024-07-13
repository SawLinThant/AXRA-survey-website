import Header from "./Header";
import Survey from "./survey";
import CustomSidebar from "@/components/Sidebar";
import Users from "./user";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Survey />
      <Users />
      {/* <CustomSidebar /> */}
      {/* <Routes>
          <Route path="*" element={<Survey />}></Route>
          <Route path="Users" element={<Users />}></Route>
        </Routes> */}
    </>
  );
};
export default Dashboard;
