import { Route, Routes } from "react-router";
import Survey from "./survey";
import CustomSidebar from "@/components/Sidebar";
import Users from "./user";
import { Routes,Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Survey />} />
      </Routes>
    </>
  );
};
export default Dashboard;
