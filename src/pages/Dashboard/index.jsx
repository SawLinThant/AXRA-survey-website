import Header from "./Header";
import Survey from "./survey";
import CustomSidebar from "@/components/Sidebar";
import Users from "./user";
import Detail from "./detail/[id]";
import { Routes,Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Survey />} />
        <Route path="Users" element={<Users />} />
        <Route path="detail/:id" element={<Detail/>} />
      </Routes>
    </>
  );
};
export default Dashboard;
