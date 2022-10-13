import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangePassword from "../My Components/ChangePassword";
import ChangePassw from "../My Components/ChangePassword";
import ForgotPassword from "../My Components/ForgotPassword";
import Login from "../My Components/Login";

import SignUp from "../My Components/signup";

export const AllRoutes = () => {
  return <Routes>
    <Route path='/' ></Route>
    <Route path='/signup' element={<SignUp/>} ></Route>
    <Route path="/login" element={<Login/>} ></Route>
    <Route path='/change_password' element={<ChangePassword/>} ></Route>
    <Route path="/forgot_password" element={<ForgotPassword/>} ></Route>
  </Routes>;
};
