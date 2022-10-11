import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";

export const AllRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  );
};
