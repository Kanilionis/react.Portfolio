import React from "react"
import bench from "../images/bench.jpg"
import "../index.css"
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

    <div className="about container-fluid">
    <div className="row">
    <div className="col-2"></div>
      <div className="col-3">
        <img src={bench} alt="Katie Anilionis" height="280px" min-width="245px"/>
      </div>
    
      <div className="col-lg-7 col-md-8">
          <p id="paragraph1">Katie Anilionis is a <span>5th generation Colorado native</span>, also known as a unicorn.  She has lived in Florida, California and New York obtaining a college education and gaining ample experience in the fashion industry.  After leaving New York, and realizing the world is heading in a very tech-centric direction, she decided to go back to school to learn coding.  <br></br>Fun Fact: Katie and her fiance met through their mothers and are planning to get married in June of 2021, as they had to postpone the wedding this year due to COVID-19.
          </p>
      </div>
    </div>    
  </div>
    </>
  )
}

export default About