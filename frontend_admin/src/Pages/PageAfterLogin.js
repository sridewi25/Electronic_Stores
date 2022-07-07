import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarAfterLogin from "../Components/NavbarAfterLogin";
import AllProduct from "./Product/AllProduct";
import AllOrder from "./Order/AllOrder";
import EditOrder from "./Order/EditOrder";
import EditProduct from "./Product/EditProduct";
import AddProducts from "./Product/AddProducts";

function PageAfterLogin() {
  return (
    <>
      <NavbarAfterLogin></NavbarAfterLogin>
      <Routes>
        <Route path="">
          <Route path="" element={<AllProduct></AllProduct>}></Route>
          <Route path="add" element={<AddProducts></AddProducts>}></Route>
          <Route path="edit">
            <Route path=":id" element={<EditProduct></EditProduct>}></Route>
          </Route>
          <Route path="delete">
            <Route path=":id"></Route>
          </Route>
        </Route>
        <Route path="order">
          <Route path="" element={<AllOrder></AllOrder>}></Route>
          <Route path="edit">
          <Route path=":id" element={<EditOrder></EditOrder>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default PageAfterLogin;
