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

  const ProtecedRoutes = () => {
    return isLogin ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route element={<ProtecedRoutes />}>
          <Route path="/Dashboard" element={<Dashboard isLogin={isLogin} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
