import React from "react"
import ProjectCard from "../components/ProjectCard"
import Carousel from "react-bootstrap/Carousel"
import Wrapper from "../components/Wrapper"
import "../index.css"
var myWork = "{ . . . m y W o r k }"

const projectsArray =

[
  {
    "id": 1,
    "title": "employee directory",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/reactEmployeeDirectory",
    "deployedLink": "https://kanilionis.github.io/reactEmployeeDirectory/",
    "image": "/react.Portfolio/employee-directory.png"
  },
  {
    "id": 2,
    "title": "budget tracker",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/BudgetTracker",
    "deployedLink": "https://katiesmoney.herokuapp.com/",
    "image": "/react.Portfolio/budget-tracker.png"
  },
  {
    "id": 3,
    "title": "fitness tracker",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/FitnessTracker",
    "deployedLink": "https://kafitnesstracker.herokuapp.com/stats",
    "image": "/react.Portfolio/fitness-tracker.png"
  },
  {
    "id": 4,
    "title": "burger logger",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/BurgerLogger",
    "deployedLink": "https://katieanilionis-burgerlogger.herokuapp.com/",
    "image": "/react.Portfolio/burgerlogger.png"
  },
  {
    "id": 5,
    "title": "note taker",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/NoteTaker",
    "deployedLink": "https://sheltered-caverns-28727.herokuapp.com/",
    "image": "/react.Portfolio/note-taker.png"
  },
  {
    "id": 6,
    "title": "dog friendly denver",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/DogFriendlyDenver",
    "deployedLink": "https://kanilionis.github.io/DogFriendlyDenver/",
    "image": "/react.Portfolio/dogfriendlydenver.png"
  },
  {
    "id": 7,
    "title": "work day scheduler",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/Homework5Calendar",
    "deployedLink": "https://kanilionis.github.io/Homework5Calendar/",
    "image": "/react.Portfolio/workdayscheduler.png"
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
          <center>
          <Carousel className="carousel">
          {this.state.projectsArray.map(project => (
            <Carousel.Item className="carousel-item">
            <ProjectCard {...project}/>
            </Carousel.Item>
         
          ))}
          </Carousel>
          </center>
        </Wrapper>
        <br></br>
        <br></br>
        

      </>
 
  )
}
}


export default Projects

