import React from 'react'
import { Routes,Route } from 'react-router-dom'
import NavbarBeforelogin from '../components/NavbarBeforelogin'
import HomeBeforelogin from '../pages/Home/HomeBeforelogin'
import PageLogin from './Login/PageLogin'
import PageRegister from './Register/PageRegister'

function MainPageBeforeLogin() {
  return (
    <>
    <NavbarBeforelogin></NavbarBeforelogin>
    <Routes>
      <Route path="/" element={<HomeBeforelogin></HomeBeforelogin>}></Route>
      <Route path="/login_user" element={<PageLogin></PageLogin>}></Route>
      <Route path="/register_user" element={<PageRegister></PageRegister>}></Route>
    </Routes>
    </>
  )
}

export default MainPageBeforeLogin