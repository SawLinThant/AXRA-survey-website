import Header from "./Header";
import Survey from "./survey";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Survey />
      {/* <CustomSidebar /> */}
      {/* <Routes>
          <Route path="*" element={<Survey />}></Route>
          <Route path="Users" element={<Users />}></Route>
        </Routes> */}
    </>
  );
};
export default Dashboard;
