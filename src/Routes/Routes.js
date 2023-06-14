import React from 'react';
import Main from '../Layout/Main';
import DisplayError from '../Pages/Shared/DisplayError/DisplayError';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement: <DisplayError/>,
        children: [
            {
                path: '/',
            }
        ]
    }
])
export default router;