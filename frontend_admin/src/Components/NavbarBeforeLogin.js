import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './style.css'

function NavbarBeforeLogin() {
  return (
    
      <nav className="navbar navbar-expand-lg bg-color sticky-top">
        <div className="container-sm">
          <Link className="nav-link" to='/' >
          <h1 className="title-navbar">Electronic Stores</h1>
          </Link>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item item-style">
              <Link className="nav-link" to="/login" style={{color: 'white'}}><span><FontAwesomeIcon icon={faRightToBracket} /></span>Login</Link>
              </li>
              <li className="nav-item item-style">
                <Link className="nav-link"to="/register" style={{color: 'white'}}><span><FontAwesomeIcon icon={faUserPlus} /></span>Register</Link>
              </li>
            </ul>
        </div>
      </nav>
   
  )
}

export default NavbarBeforeLogin