import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Logo.png";

const Header = () => {
  const activeStyle = { color: "black" };

  return (
    <nav id="header">
      <img id="logo" src={logo} alt="Logo" />
      <NavLink to="/" className="header-item" activeStyle={activeStyle} exact>
        Home
      </NavLink>{" "}
      <NavLink to="/about" className="header-item" activeStyle={activeStyle}>
        About
      </NavLink>
      <NavLink to="/contact" className="header-item" activeStyle={activeStyle}>
        Contact
      </NavLink>
      <NavLink to="/blog" className="header-item" activeStyle={activeStyle}>
        Blog
      </NavLink>
    </nav>
  );
};

export default Header;
