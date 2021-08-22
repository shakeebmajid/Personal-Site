import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Logo.png";

const Header = () => {
  const activeStyle = { color: "black" };

  return (
    <nav className="shadow-sm box-content mb-4 p-4 h-12 flex space-x-2 items-center">
      {/* <ul className=""> */}
      <img
        id="logo"
        className="box-content h-full w-auto pl-4"
        src={logo}
        alt="Logo"
      />
      <NavLink
        to="/"
        className="header-item"
        activeClassName="active-header-item"
        exact
      >
        Home
      </NavLink>{" "}
      <NavLink
        to="/about"
        className="header-item"
        activeClassName="active-header-item"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="header-item"
        activeClassName="active-header-item"
      >
        Contact
      </NavLink>
      <NavLink
        to="/blog"
        className="header-item"
        activeClassName="active-header-item"
      >
        Blog
      </NavLink>
      {/* </ul> */}
    </nav>
  );
};

export default Header;
