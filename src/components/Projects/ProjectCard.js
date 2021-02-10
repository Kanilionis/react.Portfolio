import React from "react";
import "./projectcard.css"
import Card from "react-bootstrap/Card"



// import github from "../images/github.png"
// import heroku from "../images/heroku.png"
// import gh from "../images/gh-pages.png"
// import projects from "../projects.json"

function ProjectCard(props){
  
  return (
    <>
    
    
    <div maxWidth={1000}>
   
    <div className="card">
      <Card.Body className="container slides card-body">
        <div className="col-4">
      <Card.Img className="card-img float-left" src={props.image} alt={props.title}/>
      
      </div>
      <center className="card-center">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">
        {props.description}
        </p>
        
        <Card.Link className="card-text" href={props.gitHubLink}>repository</Card.Link>
        <Card.Link className="card-text" href={props.deployedLink}>deployed app</Card.Link>
        <div className="col-md-12 col-sm-12 col-xs-12 float-center">
        {props.tech.map(icon => (
          <img className="tech-used" height="30px" width="auto" src={icon} alt="tech"></img>
        ))}
        </div>
        </center>
        
        
      
     
      
     
      </Card.Body>
  </div>
  </div>
    </>
    )
  }

export default ProjectCard





