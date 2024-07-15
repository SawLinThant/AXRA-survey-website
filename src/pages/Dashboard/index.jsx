import { Route, Routes } from "react-router";
import Survey from "./survey";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Survey />} />
        {/* <Route path="Users" element={<Users />} />
        <Route path="detail/:id" element={<DetailPage/>} /> */}
      </Routes>
    </>
  );
};
export default Dashboard;
