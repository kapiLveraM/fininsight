import { Route, Routes } from "react-router-dom";
import Details from "../../../view/dashboards/Details";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFF] dark:bg-[#13131A]">
      {/* Sidebar component */}
      <SideBar />
      {/* Main content area */}
      <div className="w-full p-5 md:pl-10 md:pr-8 md:py-8 h-screen overflow-auto">
        {/* Navbar component with dynamic title */}
        <NavBar />
        {/* Routes for rendering components based on the routerData */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
