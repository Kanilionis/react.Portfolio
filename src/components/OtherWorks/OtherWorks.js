import React from "react";
import "./otherworks.css"
import {Card} from "react-bootstrap"



// import github from "../images/github.png"
// import heroku from "../images/heroku.png"
// import gh from "../images/gh-pages.png"
// import projects from "../projects.json"

function OtherWorks(props){
  
  return (
    <>
  
   
      <div  className="other-works-card col-md-4 col-sm-12 col-xs-12">
        <div className="other-works-body">
        <center className="other-center">
        <img className="other-works-img"  src={props.image} alt={props.title}/>
      
        

        <div className="other-card-title">{props.title}
        {/* <Card.Text >
        {props.description}
        </Card.Text> */}
        
        <br/>
        <a className="other-card-text" href={props.gitHubLink}>repository</a><br/>
        <a className="other-card-text" href={props.deployedLink}>deployed app</a>
        </div>
        </center>
     
      
        </div>
      </div>
    
    </>
    )
  }

export default OtherWorks





