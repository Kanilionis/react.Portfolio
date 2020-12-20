import React from "react"
import { Link } from "react-router-dom"
import github from "../../src/images/github.png"
import instagram from "../../src/images/instagram.png"
import linkedin from "../../src/images/linkedin.png"
import MyForm from "../components/Contact/ContactForm"
import Footer from "../components/Footer/Footer"
import "../components/Contact/contact.css"
import "../index.css"
var contactMe = "{ . . . c o n t a c t M e }"

function Contact() {
  return (
    <>
     <div className="contact-links container-fluid"> 
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 contact">{contactMe}<br></br>
          <Link to="https://www.instagram.com/katieanilionis" target="_blank" rel="noreferrer">
          <img className="link-buttons" src={instagram} height="50px" width="auto" alt="instagram"/>
          </Link>
          <Link to="https://www.github.com/kanilionis" target="_blank" rel="noreferrer">
          <img className="link-buttons"  src={github} height="50px" width="auto" alt="github"/>
          </Link>
          {/* <img src={github} height="50px" width="auto" alt="github"><span type="button" onClick="https://www.github.com/kanilionis"/>
          </img> */}
          <Link to="https://www.linkedin.com/in/katie-anilionis-4720258a/" target="_blank" rel="noreferrer">
          <img className="link-buttons" src={linkedin} height="50px" width="auto" alt="github"/>
          </Link>
          {/* <img src={linkedin} height="50px" width="auto" alt="linkedin" onClick="https://www.linkedin.com/in/katie-anilionis-4720258a/" role="button">
          </img> */}
  <br></br>
    <center className="contact-form">
        <MyForm />

    </center>
        </div>
        
        <div className="col-3"></div>
      </div>
    </div>
    
    
   
    <Footer/>

    </>
  )
}

export default Contact