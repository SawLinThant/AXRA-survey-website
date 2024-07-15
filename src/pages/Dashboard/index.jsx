import { Route, Routes } from "react-router";
import Survey from "./survey";

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
