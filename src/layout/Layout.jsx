import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex w-full h-full">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="mx-12 my-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
