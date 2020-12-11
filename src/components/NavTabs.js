import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import "../index.css"
import { DropdownButton, Dropdown } from "react-bootstrap"

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();


  return (
    <>
    <nav id="navbar" className="nav-wrapper container-fluid">
      <Header ></Header>
    <ul className="col-sm-1 col-md-6 col-lg-8" id="menu">
      <li className="nav-item">
        <Link to="/react.Portfolio" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/react.Portfolio/about"
          className={location.pathname === "/about" ? "nav-link" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/react.Portfolio/projects"
          className={location.pathname === "/projects" ? "nav-link" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/react.Portfolio/resume"
          className={location.pathname === "/resume" ? "nav-link" : "nav-link"}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/react.Portfolio/contact"
          className={location.pathname === "/contact" ? "nav-link" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      
    </ul>
    <DropdownButton className="hidden" >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
          <a className="icon"/>
          <i class="fa fa-bars"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/react.Portfolio">Home</Dropdown.Item>
        <Dropdown.Item href="/react.Portfolio/about">About</Dropdown.Item>
        <Dropdown.Item href="/react.Portfolio/projects">Projects</Dropdown.Item>
        <Dropdown.Item href="/react.Portfolio/resume">Resume</Dropdown.Item>
        <Dropdown.Item href="/react.Portfolio/contact">Contact</Dropdown.Item>
      </Dropdown.Menu>
    </DropdownButton>
    </nav>
   
    </>
  );
}

export default NavTabs;
