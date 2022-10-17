import React from "react";
import { Route, Routes } from "react-router-dom";
import { Collections } from "../Pages/Collections";
import { Home } from "../Pages/Home";
import { IndivisualCategory } from "../Pages/IndivisualCategory";
import { SailWithBoat } from "../Pages/SailWithBoat";
import ChangePassword from "../Pages/ChangePassword";
import ForgotPassword from "../Pages/ForgotPassword";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/Signup";
import { NotFound } from "../Pages/NotFound";
import { AllProducts } from "../Pages/AllProducts";
<<<<<<< HEAD
import { Orders } from "../Pages/Orders";
// import ProductDetails from "../ProducDetails/ProductDetails";
=======
>>>>>>> parent of ceab7be (added cart functionalities in all pages)



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
      <Route path="/collections/products" element={<AllProducts/>}></Route>
      {/* <Route path="/collections/products/:id/:name" element={<ProductDetails/>}></Route> */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
