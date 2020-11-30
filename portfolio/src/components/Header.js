import React from "react";
import logo from "../images/logo.png"
import { Link, useLocation } from "react-router-dom";
import "../index.css"


function Header(){
  const location = useLocation();
  return(
    <>
   <Link to="/" className="logo-img"><img src={logo} alt="logo" height="60px" width="auto"/>
        </Link>
   
    </>
  )
}

export default Header