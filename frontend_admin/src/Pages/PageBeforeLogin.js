import React from 'react'
import { Routes,Route } from 'react-router-dom'
import NavbarBeforeLogin from '../Components/NavbarBeforeLogin'
import LoginPage from '../Pages/Login/LoginPage'
import RegisterPage from '../Pages/Register/RegsiterPage'

function PageBeforeLogin() {
  return (
    <>
    <NavbarBeforeLogin></NavbarBeforeLogin>
    <Routes>
      <Route path="" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
    </>
  )
}

export default PageBeforeLogin