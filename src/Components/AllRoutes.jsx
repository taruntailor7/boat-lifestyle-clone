import React from "react";
import { Route, Routes } from "react-router-dom";
import { Collections } from "../Pages/Collections";
import { Home } from "../Pages/Home";
import { IndivisualCategory } from "../Pages/IndivisualCategory";
import { SailWithBoat } from "../Pages/SailWithBoat";
import ChangePassword from "../Pages/ChangePassword";
import ForgotPassword from "../Pages/ForgotPassword";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/signup"

export const AllRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/signup' element={<SignUpPage/>} ></Route>
      <Route path="/login" element={<LoginPage/>} ></Route>
      <Route path='/change_password' element={<ChangePassword/>} ></Route>
      <Route path="/forgot_password" element={<ForgotPassword/>} ></Route>
      <Route path="/collections/:id/" element={<Collections />}></Route>
      <Route path="/collections/sail-with-boat" element={<SailWithBoat />}></Route>
      <Route path="/collections/:id/:url" element={<IndivisualCategory />}></Route>

    </Routes>
  );
};
