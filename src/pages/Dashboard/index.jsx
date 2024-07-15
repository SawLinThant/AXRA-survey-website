import Header from "./Header";
import Survey from "./survey";
import CustomSidebar from "@/components/Sidebar";
import Users from "./user";
import { Routes,Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Survey />} />
        <Route path="Users" element={<Users />} />
      </Routes>
    </>
  );
};
export default Dashboard;
