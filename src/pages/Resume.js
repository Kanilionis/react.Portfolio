import React from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import resume from "../images/katie.anilionis.resume.pdf";
import '@react-pdf-viewer/core/lib/styles/index.css';
import github from "../images/github.png"
import Footer from "../components/Footer/Footer"
var myResume = "{ . . . m y R e s u m e }"
function Resume(){

  return(
    <>
     <div className="contact-links container-fluid"> 
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">{myResume}
        </div>
        </div>
        </div>
    <center>
    
    <div className="resume">
    <Worker width="2500px" height="3000px"
    workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js" ></Worker>
    <div
      // style={{
        
      //   height: "775px",
      //   width: "600px"
      // }}
      >
    <Viewer fileUrl={resume}/>
    </div>
    <div className="github-link">
    <img className="git-img" height="50px" width="auto" src={github} alt="github"/>
    <a href="https://kanilionis.github.io/Resume/" target="_blank" rel="noreferrer" >View as README</a>
    </div>
    <br></br>
    </div>
    
   
    </center>
    <Footer/>

    </>
  )

}




  export default Resume