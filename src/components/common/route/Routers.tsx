/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Authentication from "./Authentication";

const Routers = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/dashboard/details?type=income");
    }
  }, []); // Include localStorage.getItem("themes") to re-run effect when it changes
  return pathname.includes("dashboard") ? <Dashboard /> : <Authentication />;
};

export default Routers;
