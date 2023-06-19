import React from 'react';
import Main from '../Layout/Main';
import DisplayError from '../Pages/Shared/DisplayError/DisplayError';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import About from '../Pages/About/About';

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
            }
        ]
    }
])
export default router;