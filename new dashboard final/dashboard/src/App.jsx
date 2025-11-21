// dashboard/src/App.jsx
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
import Sidebar from "./components/Sidebar";
import AddNewAdmin from "./components/AddNewAdmin";
import { Context } from "./main";
import api from "/src/api/axios.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  // inside App.jsx
useEffect(() => {
  let cancelled = false;

  const fetchUser = async () => {
    try {
      // baseURL = http://localhost:5000/api/v1
      // path     = /user/admin/me
      const { data } = await api.get("/user/admin/me");

      if (!cancelled) {
        setIsAuthenticated(true);
        setUser(data.user || {});
      }
    } catch {
      if (!cancelled) {
        setIsAuthenticated(false);
        setUser({});
      }
    }
  };

  fetchUser();
  return () => {
    cancelled = true;
  };
}, [setIsAuthenticated, setUser]);


  return (
    <Router>
      {isAuthenticated && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/doctor/addnew"
          element={isAuthenticated ? <AddNewDoctor /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/admin/addnew"
          element={isAuthenticated ? <AddNewAdmin /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/messages"
          element={isAuthenticated ? <Messages /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/doctors"
          element={isAuthenticated ? <Doctors /> : <Navigate to="/login" replace />}
        />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />}
        />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
