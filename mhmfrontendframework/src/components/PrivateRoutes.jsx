import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isLoggedIn } from './authUtils';

const PrivateRoutes = ()  => {
    console.log(isLoggedIn())

    if(isLoggedIn()) {
        return <Outlet />
    }
    else {
        // return "You need to log in to view this page."
        return <Navigate to={"/login"} />
    }
}

export default PrivateRoutes