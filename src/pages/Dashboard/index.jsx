import Header from "./Header";
import Survey from "./survey";
<<<<<<< HEAD
import CustomSidebar from "@/components/Sidebar";
import Users from "./user";
import Detail from "./detail/[id]";
import { Routes,Route } from "react-router-dom";
=======
>>>>>>> dc5b548d63a90b3f57564f8d1688737a47126b96

const Dashboard = () => {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="*" element={<Survey />} />
        <Route path="Users" element={<Users />} />
        <Route path="detail/:id" element={<Detail/>} />
      </Routes>
=======
      <Survey />
      {/* <CustomSidebar /> */}
      {/* <Routes>
          <Route path="*" element={<Survey />}></Route>
          <Route path="Users" element={<Users />}></Route>
        </Routes> */}
>>>>>>> dc5b548d63a90b3f57564f8d1688737a47126b96
    </>
  );
};
export default Dashboard;
