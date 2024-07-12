import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const ProtectedRoutes = () => {
    return !isLogin && !user ? <Navigate to="/login" /> : <Outlet />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
