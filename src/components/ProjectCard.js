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
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.image} alt={props.title}/>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
     {props.description}
    </Card.Text>
  </Card.Body>
 
  <Card.Body>
    <Card.Link href={props.gitHubLink}>Repository</Card.Link>
    <Card.Link href={props.deployedLink}>Deployed App</Card.Link>
  </Card.Body>
</Card>
    </>
    )
  }

export default ProjectCard





