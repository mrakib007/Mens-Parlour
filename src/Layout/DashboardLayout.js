import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { AuthContext } from "../contexts/AuthProvider";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  return (
  //   <div>
  //   <NavBar></NavBar>
  //   <div className="drawer drawer-mobile">
  //     <input
  //       id="dashboard-drawer"
  //       type="checkbox"
  //       className="drawer-toggle"
  //     />
  //     <div className="drawer-content ">
  //       <Outlet></Outlet>
  //     </div>
  //     <div className="drawer-side">
  //       <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
  //       <ul className="menu p-4 w-80 bg-base-100 text-base-content">
  //         <li>
  //           <Link to='/dashboard'>My Appointments</Link>
  //         </li>
  //         {/* <li>
             
  //         </li> */}
  //       </ul>
  //     </div>
  //   </div>
  // </div>

  <div>
    <NavBar/>
  
  <div className="drawer lg:drawer-open">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
</div>
  );
};

export default DashboardLayout;
