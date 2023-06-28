import React from 'react';
import Main from '../Layout/Main';
import DisplayError from '../Pages/Shared/DisplayError/DisplayError';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login/Login';
import Signup from '../Pages/Login/Signup/Signup';
import DashboardLayout from '../Layout/DashboardLayout';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement: <DisplayError/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: 
        <DashboardLayout/>,
        errorElement: <DisplayError/>,
        children: [
            {
                path: '/dashboard',
            }
        ]
    }
])
export default router;