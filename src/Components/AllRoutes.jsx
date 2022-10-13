import React from "react";
import { Route, Routes } from "react-router-dom";
import { Collections } from "../Pages/Collections";
import { Home } from "../Pages/Home";
import { IndivisualCategory } from "../Pages/IndivisualCategory";
import { SailWithBoat } from "../Pages/SailWithBoat";

export const AllRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/collections/:id/" element={<Collections />}></Route>
      <Route path="/collections/sail-with-boat" element={<SailWithBoat />}></Route>
      <Route path="/collections/:id/:url" element={<IndivisualCategory />}></Route>
    </Routes>
  );
};
