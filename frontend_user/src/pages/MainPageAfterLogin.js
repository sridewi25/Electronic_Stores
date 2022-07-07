import React from "react";
import NavbarAfterlogin from "../components/NavbarAfterlogin";
import { Routes, Route } from "react-router-dom";
import AllProduct from "./Product/AllProduct";
import DetailProduct from "./Product/DetailProduct";
import EditOrder from "./Order/EditOrder";
import OrderUser from "./Order/OrderUser";


function MainPageAfterLogin() {
  return (
    <>
      <NavbarAfterlogin></NavbarAfterlogin>
      <Routes>
        <Route path="">
          <Route path="" element={<AllProduct></AllProduct>}></Route>
          <Route path="detail">
            <Route path=":id" element={<DetailProduct></DetailProduct>}></Route>
          </Route>
        </Route>
        <Route path="order">
          <Route path="" element={<OrderUser></OrderUser>}></Route>
          <Route path="checkout">
            <Route path=":id" element={""}></Route>
          </Route>
          <Route path="edit">
            <Route path=":id" element={<EditOrder></EditOrder>}></Route>
          </Route>
          <Route path="delete">
            <Route path=":id"></Route>
          </Route>
        </Route>
      </Routes>
      
    </>
  );
}

export default MainPageAfterLogin;
