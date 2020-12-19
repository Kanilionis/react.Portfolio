import React from "react";
import logo from "../../../src/images/logo.png"
import { Link } from "react-router-dom";
import "./header.css"



function Header(){
  
  return(
    <>
   <Link to="/react.Portfolio" className="logo-img"><img src={logo} alt="logo" height="60px" width="auto"/>
        </Link>
   
    </>
  )
}

export default Header