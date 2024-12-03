import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import { getInfo } from "./apis/auth";

export const ProtectedRoute = ({ user, children, loading }) => {
  if (loading === true) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getInfo();
      if (userInfo) {
        setUser(userInfo);
      }
      setLoading(false);
    };
    fetchUserInfo();
  }, [token]); // Empty dependency array ensures this effect runs only once

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/todos"
          element={
            <ProtectedRoute user={user} loading={loading}>
              <TaskPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
