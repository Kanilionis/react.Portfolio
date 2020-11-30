import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import "../index.css"

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <>
    <nav id="navbar" className="nav-wrapper">
      <Header className="col-8"></Header>
    <ul id="menu">
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
          to="/react.Portfolio/contact"
          className={location.pathname === "/contact" ? "nav-link" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
    </nav>
    
    </>
  );
}

export default NavTabs;
