import React from "react"

import Card from "react-bootstrap/Card"
import Wrapper from "../components/Wrapper"
import "../index.css"
var myWork = "{ . . . m y W o r k }"

const projectsArray =

[
  {
    "id": 1,
    "title": "Employee Directory",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/reactEmployeeDirectory",
    "deployedLink": "https://kanilionis.github.io/reactEmployeeDirectory/",
    "image": "/react.Portfolio/employee-directory.png"
  },
  {
    "id": 2,
    "title": "Budget Tracker",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/BudgetTracker",
    "deployedLink": "https://katiesmoney.herokuapp.com/",
    "image": "/react.Portfolio/budget-tracker.png"
  },
  {
    "id": 3,
    "title": "Fitness Tracker",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/FitnessTracker",
    "deployedLink": "https://kafitnesstracker.herokuapp.com/stats",
    "image": "/react.Portfolio/fitness-tracker.png"
  },
  {
    "id": 4,
    "title": "Burger Logger",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/BurgerLogger",
    "deployedLink": "https://katieanilionis-burgerlogger.herokuapp.com/",
    "image": "/react.Portfolio/burgerlogger.png"
  },
  {
    "id": 5,
    "title": "Note Taker",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/NoteTaker",
    "deployedLink": "https://sheltered-caverns-28727.herokuapp.com/",
    "image": "/react.Portfolio/note-taker.png"
  },
  {
    "id": 6,
    "title": "Dog Friendly Denver",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/DogFriendlyDenver",
    "deployedLink": "https://kanilionis.github.io/DogFriendlyDenver/",
    "image": "/react.Portfolio/dogfriendlydenver.png"
  },
  {
    "id": 7,
    "title": "Work Day Scheduler",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/Homework5Calendar",
    "deployedLink": "https://kanilionis.github.io/Homework5Calendar/",
    "image": "/react.Portfolio/workdayscheduler.png"
  },
  {
    "id": 8,
    "title": "Resume",
    "description": "",
    "gitHubLink": "https://kanilionis.github.io/Resume/",
    "deployedLink": "/react.Portfolio/katie.anilionis.resume.pdf",
    "image": "/react.Portfolio/resumeicon.png"
  }
]


class Projects extends React.Component {
 
  state = {
    projectsArray: projectsArray
  };

  componentDidMount(){
    console.log(projectsArray)
    this.setState({projectsArray: projectsArray})
  };

 

  // showProjectCard = (id) => {
  //   console.log(id)
  //   const projectArray = this.state.projects.filter( project => project.id !== id )
  //   console.log(projectArray)
  //   this.setState({projects: projectArray})
  // }

  render(){
    return (
    <>
    
     <div className="contact-links container-fluid"> 
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 contact">{myWork}<br></br>
        </div>
        </div>
        </div>
        <br></br>
        <Wrapper>
          {this.state.projectsArray.map(project => (
  
          <Card style={{ width: '18rem' }}>
          <Card.Img height="260px" width="auto" className="card-img" variant="top" src={project.image} alt={project.title}/>
          <Card.Body>
            <Card.Title className="card-title">{project.title}</Card.Title>
            <Card.Text className="card-text">
             {project.description}
            </Card.Text>
          </Card.Body>
         
          <Card.Body className="card-body" >
            <Card.Link href={project.gitHubLink}>Repository</Card.Link>
            <Card.Link href={project.deployedLink}>Deployed App</Card.Link>
          </Card.Body>
        </Card>
          ))}
        </Wrapper>
        <br></br>
        <br></br>

      </>
 
  )
}
}


export default Projects

