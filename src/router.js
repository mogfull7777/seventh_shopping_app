import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "./component/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import FindEmail from "./pages/FindEmail";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Main />
    },
    {
        path : '/signup',
        element : <SignUp />
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/forgot/password',
        element : <ForgotPassword />
    },
    {
        path : '/find/email',
        element : <FindEmail />
    },
    {
        path : '/profile',
        element : <Profile />
    },
    {
        path : '/:productId',
        element : <ProductDetail />
    }
]);

export default Router;