import { Login } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangePassword from "../Pages/ChangePassword";
import ForgotPassword from "../Pages/ForgotPassword";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/signup";


export const AllRoutes = () => {
  return <Routes>
    <Route path='/'  ></Route>
    <Route path='/signup' element={<SignUpPage/>} ></Route>
    <Route path="/login" element={<LoginPage/>} ></Route>
    <Route path='/change_password' element={<ChangePassword/>} ></Route>
    <Route path="/forgot_password" element={<ForgotPassword/>} ></Route>
  </Routes>;
};
