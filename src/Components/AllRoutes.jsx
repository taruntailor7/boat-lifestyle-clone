import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../My Components/Login";

import SignUp from "../My Components/signup";

export const AllRoutes = () => {
  return <Routes>
    <Route path='/signup' element={<SignUp/>} ></Route>
    <Route path="/login" element={<Login/>} ></Route>
  </Routes>;
};
