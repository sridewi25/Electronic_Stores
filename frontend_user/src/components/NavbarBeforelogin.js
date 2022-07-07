import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/App.css";
import { Link } from "react-router-dom";

function NavbarBeforelogin() {
  return (
    <div id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <span>Electronic Stores</span>
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to="/login_user" className="nav-link scrollto active" >
                Login
              </Link>
            </li>
            <li>
              <Link to="/register_user"className="nav-link scrollto" >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavbarBeforelogin;
