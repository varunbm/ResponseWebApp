import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/">
              ModalaCode
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    // activeClassName="menu_active"
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/courses"
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>{" "}
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
