import React, { Fragment } from "react";
import Home from "./Home";
import Contact from "./Contact";
import Student from "./Student";
import { Link, NavLink } from "react-router-dom";
import './App.css';

const Header = () => {
  return (
    <Fragment>
    
      <h1 className="header">
        <Link to="/home">
          <Home />
        </Link>
        &nbsp;
        <NavLink to="/contact" activeClassName="active">
          <Contact />
        </NavLink>
        &nbsp;
        <Link to="/student">
          <Student />
        </Link>
      </h1>
    </Fragment>
  );
};

export default Header;