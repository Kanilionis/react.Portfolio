import React from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import resume from "../images/katie.anilionis.resume.pdf";
import codingResume from "../images/Coding Resume.png"
import '@react-pdf-viewer/core/lib/styles/index.css';
import github from "../images/github.png"
import Footer from "../components/Footer/Footer"
import { PDFReader } from 'react-read-pdf'
import "../index.css"
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
    {/* <center> */}
   
{/* <div className="col-6">
     
    <div className="resume">
    <Worker width="2000px" height="2500px"
   
    workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js" >
    </Worker>
    <div
      // style={{
        
      //   height: "775px",
      //   width: "600px"
      // }}
      >
    <Viewer fileUrl={resume}/>
    </div> */}
   
    {/* <PDFReader className="pdf col-6" url={codingResume}/> 
  */}

<center>

   <div className="github-link col-4">
    <img className="git-img" height="40px" width="auto" src={github} alt="github"/>
    <a href="https://kanilionis.github.io/Resume/" target="_blank" rel="noreferrer" >View Professional Resume</a>
  
    </div>
    <br></br>
    <div className="col-8">
    <Worker height="500px" width="200px" 
    // workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js" >
     workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js">
      <Viewer className="resume" fileUrl={codingResume}/>
    </Worker>
    </div>
    </center>
    <div
      // style={{
        
      //   height: "775px",
      //   width: "600px"
      // }}
      >
    
    </div>
    
   
    

    
    {/* </center> */}
   
    <Footer/>

    </>
  )

}




  export default Resume