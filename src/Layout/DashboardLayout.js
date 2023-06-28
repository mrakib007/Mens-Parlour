import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const DashboardLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          {/* <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button"
          ></label> */}
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to={"/dashboard"}>My Appointments</Link>
            </li>
            <li>
              <Link>Sidebar Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
