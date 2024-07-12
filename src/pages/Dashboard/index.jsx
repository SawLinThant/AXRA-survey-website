import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Survey from "./survey";
import Users from "./user";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        {/* <CustomSidebar /> */}
        <Routes>
          <Route path="*" element={<Survey />}></Route>
          <Route path="Users" element={<Users />}></Route>
        </Routes>
      </div>
    </>
  );
};
export default Dashboard;
