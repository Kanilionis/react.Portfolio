import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import "./nav.css"
import { Button, Form, FormControl, Navbar, Nav, NavDropdown } from "react-bootstrap"

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();


  return (
    <>
    <Navbar expand="lg"  className="container-fluid">
      <Header ></Header>
      {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
      <Navbar.Toggle ariaControls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar" >
        <Nav className="nav-wrapper col-sm-1 col-md-6 col-lg-12" id="menu">
          <ul>
            <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home</Link>
            </li>
            <li className="nav-item">
          <Link to="/about"
          className={location.pathname === "/about" ? "nav-link" : "nav-link"}
        >
          About</Link>
          </li>
          <li className="nav-item">
          <Link to="/projects"
          className={location.pathname === "/projects" ? "nav-link" : "nav-link"}
        >
          Projects</Link>
          </li>
          <li className="nav-item">
          <Link to="/resume"
          className={location.pathname === "/resume" ? "nav-link" : "nav-link"}
        >
          Resume</Link>
          </li>
          <li className="nav-item">
          <Link to="/contact"
          className={location.pathname === "/contact" ? "nav-link" : "nav-link"}
        >
          Contact</Link>
          </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    </>
  );
}

export default NavTabs;
