import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faUser, faImages } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './style.css'

function NavbarAfterLogin(props) {
  const { loginCbHandler } = props;

  const logoutHandler = () => {
    localStorage.clear()
    loginCbHandler(false)
}
  return (
    <nav className="navbar navbar-expand-lg bg-color sticky-top">
    <div className="container-sm">
      <Link className="nav-link" to='/' >
      <h1 className="title-navbar">Electronic Stores</h1>
      </Link>
      
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item item-style">
          <Link className="nav-link" to="/order" style={{color: 'white'}}><span><FontAwesomeIcon icon={faUser} /></span>Order</Link>
          </li>

          <li className="nav-item item-style">
            <Link className="nav-link"to="/" onClick={() => logoutHandler()} style={{color: 'white'}}><span><FontAwesomeIcon icon={faDoorOpen} /></span>Logout</Link>
          </li>
          
        </ul>
    </div>
  </nav>
  )
}

export default NavbarAfterLogin