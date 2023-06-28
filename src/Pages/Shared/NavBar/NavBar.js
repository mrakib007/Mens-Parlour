// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   // const [isNavOpen, setIsNavOpen] = useState(false);

//   // const toggleNav = () => {
//   //   setIsNavOpen(!isNavOpen);
//   // };
//   return (
//     <nav className="border-gray-200" data-theme="night">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link to={'/'} className="flex items-center">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-8 mr-3"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Men's Parlour
//           </span>
//         </Link>
//         <button
//           data-collapse-toggle="navbar-default"
//           type="button"
//           className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-default"
//           aria-expanded="false"
//           id="navbar-default"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-6 h-6"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul className="font-medium flex text-white flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
//             <li>
//               <Link
//                 to={'/'}
//                 className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent"
//                 aria-current="page"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={'/about'}
//                 className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//               to={'/login'}
//                 className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent"
//               >
//                 Login
//               </Link>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const NavBar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
    const menuItems = <React.Fragment>
        <li><Link className='block py-2 pl-3 pr-4 text-lg text-white  rounded md:bg-transparent' to="/">Home</Link></li>
        <li><Link className='block py-2 pl-3 pr-4 text-lg text-white  rounded md:bg-transparent' to="/about">About</Link></li>
        <li><Link className='block py-2 pl-3 pr-4 text-lg text-white  rounded md:bg-transparent' to="/appointment">Appointments</Link></li>
        
        {user?.uid ?
        <>
        <li><Link className='block py-2 pl-3 pr-4 text-lg text-white  rounded md:bg-transparent' to="/dashboard">Dashboard</Link></li>
         <li><button className='block py-2 pl-3 pr-4 text-lg text-white  rounded md:bg-transparent' onClick={handleLogOut}>Sign Out</button></li>
        </>
         :
         <li><Link className='block py-2 pl-3 pr-4 text-lg text-white  rounded md:bg-transparent' to="/login">Login</Link></li>
         }
         <li><Link className='block py-2 pl-3 pr-4 text-lg text-white  rounded md:bg-transparent' to="/contact">Contact</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu menu-compact font-medium dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-2xl">Men's Parlour</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium">
    {menuItems}
    </ul>
  </div>
  <label htmlFor='my-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
</div>
    );
};

export default NavBar;