import { Routes,Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Form from './pages/Form'
import Login from './pages/Login';
import { useState } from 'react';

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
        <Route path='/Dashboard/*' element={<Dashboard/>} />
        <Route path='/Form/*' element={<Form/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
