import React from "react"
import { Link } from "react-router-dom"
import github from "../images/github.png"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import "../index.css"
var contactMe = "{ . . . c o n t a c t M e }"

function Contact() {
  return (
    <>
     <div className="contact-links container-fluid"> 
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 contact">{contactMe}<br></br>
          <Link to="https://www.instagram.com/katieanilionis">
          <img className="link-buttons" src={instagram} height="50px" width="auto" alt="instagram"/>
          </Link>
          <Link to="https://www.github.com/kanilionis">
          <img className="link-buttons"  src={github} height="50px" width="auto" alt="github"/>
          </Link>
          {/* <img src={github} height="50px" width="auto" alt="github"><span type="button" onClick="https://www.github.com/kanilionis"/>
          </img> */}
          <Link to="https://www.linkedin.com/in/katie-anilionis-4720258a/" >
          <img className="link-buttons" src={linkedin} height="50px" width="auto" alt="github"/>
          </Link>
          {/* <img src={linkedin} height="50px" width="auto" alt="linkedin" onClick="https://www.linkedin.com/in/katie-anilionis-4720258a/" role="button">
          </img> */}
        </div>
        <div className="col-4"></div>
      </div>
    </div>
    <form className="container-fluid">
        <div className="contact-row row">
            <div className="col-lg-6 col-md-7 col-sm-8 col-xs-9">
                <label for="formGroupExampleInput">name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="e.g. Ian Rogers"/>
            </div>
          </div>
          
          <div className="contact-row row">
            <div className="col-lg-6 col-md-7 col-sm-8 col-xs-9">
                <label for="formGroupExampleInput2">email</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="e.g. irogers@centleasing.com"/>
            </div>
          </div>
         
          <div className="contact-row row">
            <div className="col-lg-6 col-md-7 col-sm-8 col-xs-9">
                <label for="formGroupExampleInput2">message</label>
                <textarea type="text" className="form-control" id="formGroupExampleInput2" rows="3" placeholder="Type your message here..."></textarea> 
            </div>
          </div>  
        
    <form className="row">
        <div className="contact-row intheknow col-12">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label check" for="exampleCheck1">Check here to stay in the know</label>
          </div>
          <br></br>
        <button type="submit" className="submitBtn btn btn-sm btn-dark">Submit</button>
      </form>
    </form>
    </>
  )
}

export default Contact