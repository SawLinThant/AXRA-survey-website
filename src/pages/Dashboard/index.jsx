import CustomSidebar from "@/components/sidebar";
import { Route, Routes } from "react-router-dom";
import Survey from "./survey";
import Users from "./user";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <CustomSidebar />
      <Routes>
        <Route path="*" element={<Survey />}></Route>
        <Route path="Users" element={<Users />}></Route>
      </Routes>
    </div>
  );
};
export default Dashboard;
