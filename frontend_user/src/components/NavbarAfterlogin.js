import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faDoorOpen,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

function NavbarAfterlogin(props) {
  const { loginCbHandler } = props;

  const logoutHandler = () => {
    localStorage.clear();
    loginCbHandler(false);
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-color-navbar">
      <div className="container-sm">
        <Link className="nav-link" to="/">
          <h1 className="title-navbar">Electronic Store</h1>
        </Link>
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item item-style">
            <Link className="nav-link" to="/order" style={{ color: "white" }}>
              {" "}
              <span>
                <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
              </span>
              Order
            </Link>
          </li>

          <li className="nav-item item-style">
            <Link
              className="nav-link"
              to="/"
              onClick={() => logoutHandler()}
              style={{ color: "white" }}
            >
              {" "}
              <span>
                <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon>
              </span>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarAfterlogin;
