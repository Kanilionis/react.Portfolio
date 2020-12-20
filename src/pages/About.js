import React from "react"
import bench from "../images/bench.jpg"
import "../index.css"
import Footer from "../components/Footer/Footer"
var aboutMe = "{ . . . a b o u t M e }"

function About() {
  return (
    <>
    <div className="contact-links container-fluid"> 
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">{aboutMe}
        </div>
        </div>
        </div>

    <div className="container-fluid">
    <div className="row">
    <div className="col-2"></div>
      <div className="col-3">
        <div className="bench-pic">
        <img  src={bench} alt="Katie Anilionis" height="380px" min-width="345px"/>
        </div>
      </div>
      
    
      <div className="col-sm-3 col-lg-6 col-md-7">
          <p id="paragraph1">I am a Colorado native who hates the cold! I moved as far away as possible to experience warm weather for college, and received my bachelor's degree from the University of Tampa with a concentration in Communication and French. Not ready to come back to Colorado, I moved to Los Angeles to begin my career in the fashion industry. That took me to New York, where I lived for four years and worked as a sales executive, production assistant, and showroom manager. Finally, I moved back to Denver, met my fiance, and worked as a category manager for an e-commerce retail company. Cut to 2020 when the pandemic hit, and I found I had quite a bit of free-time. I decided to enroll in the University of Denver full-stack web development bootcamp that I just completed in December, 2020. I sincerely enjoyed the vigorous schedule of the program, learning something new everyday, and starting a new chapter in my life as a web developer. The rest, is still unwritten.
          
          <br></br>Fun Fact: Katie and her fiance met through their mothers and are planning to get married in June of 2021, as they had to postpone the wedding this year due to COVID-19.
          </p>
      </div>
    </div>    
  </div>
  <Footer/>
    </>
  )
}

export default About