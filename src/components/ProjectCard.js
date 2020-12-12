import React from "react";
import "../index.css"
import Card from "react-bootstrap/Card"



// import github from "../images/github.png"
// import heroku from "../images/heroku.png"
// import gh from "../images/gh-pages.png"
// import projects from "../projects.json"

function ProjectCard(props){
  
  return (
    <>
  <div className="container">
      
  <Card className="card">
    <div className="row">
      
      <Card.Body className="col-3 card-body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="card-text">
        {props.description}sdllsdkgnvalksdfhgnlkajsdf
        </Card.Text>
        <Card.Link className="card-text" href={props.gitHubLink}>repository</Card.Link>
        <Card.Link href={props.deployedLink}>deployed app</Card.Link>
      </Card.Body>
     
      </div>
     
      <Card.Img className="col-4 float-left"src={props.image} alt={props.title}/>
      
  </Card>
</div>

    </>
    )
  }

export default ProjectCard





