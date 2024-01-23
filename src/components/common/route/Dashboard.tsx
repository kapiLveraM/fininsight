import { Route, Routes } from "react-router-dom";
import Details from "../../../view/dashboards/Details";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/details" element={<Details />} />
    </Routes>
  );
};

export default Dashboard;
