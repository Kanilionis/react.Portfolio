import React from "react"
import ProjectCard from "../components/Projects/ProjectCard"
import Footer from "../components/Footer/Footer"
import {Carousel, Row, Col} from "react-bootstrap"
import Wrapper from "../components/Wrapper"
import OtherWorks from "../components/OtherWorks/OtherWorks"
import "../components/Projects/projectcard.css"
var myWork = "{ . . . m y W o r k }"

const showCaseProj =
[
  {
    "id": 8,
    "title": "weather search",
    "description": "Using the OpenWeatherMap API, the user is able to search for the current weather for a specific city, as well as see the 5-day forecast. Previous searches stay on the screen as buttons for easy access to the user's favorites.",
    "gitHubLink": "https://github.com/Kanilionis/WeatherForecast",
    "deployedLink": "https://kanilionis.github.io/WeatherForecast/",
    "image": "/react.Portfolio/weather-search.png",
    "tech": ["/react.Portfolio/icons/javascript.png", "/react.Portfolio/icons/bootstrap.png", "/react.Portfolio/icons/api.png"]
  },
  {
    "id": 9,
    "title": "shake it up",
    "description": "Use Shake It Up if you and your S.O. are constantly arguing about your plans and need someone else to decide for you. Shake It Up starts with 5 categories (shakers), containing an array of activities or ideas. Choose the category you would like, and an activity will be randomly chosen for you. If you don’t like the activity given, simply, shake again, OR create your own shaker to use whenever you want.",
    "gitHubLink": "https://github.com/Kanilionis/MasonJar",
    "deployedLink": "https://shake-it-up.herokuapp.com/",
    "image": "/react.Portfolio/shake-it-up.png",
    "tech": ["/react.Portfolio/icons/react.png", "/react.Portfolio/icons/bootstrap.png", "/react.Portfolio/icons/javascript.png", "/react.Portfolio/icons/formspree.png", "/react.Portfolio/icons/auth0.png", "/react.Portfolio/icons/db.png"]
  },
  {
    "id": 1,
    "title": "employee directory",
    "description": "This is an interactive database tool used to keep track of employees. The user can sort and search by any property, as well as delete employees.",
    "gitHubLink": "https://github.com/Kanilionis/reactEmployeeDirectory",
    "deployedLink": "https://kanilionis.github.io/reactEmployeeDirectory/",
    "image": "/react.Portfolio/employee-directory.png",
    "tech": ["/react.Portfolio/icons/react.png", "/react.Portfolio/icons/bootstrap.png", "/react.Portfolio/icons/javascript.png", "/react.Portfolio/icons/db.png" ]
  },
  {
    "id": 7,
    "title": "work day scheduler",
    "description": "Keep track of your day with this work-day scheduler. The user is able to add, edit and delete items in a specific time slot. Colors on the schedule change as the day moves on (grey for time that has passed, red for current, and green for future.",
    "gitHubLink": "https://github.com/Kanilionis/Homework5Calendar",
    "deployedLink": "https://kanilionis.github.io/Homework5Calendar/",
    "image": "/react.Portfolio/workdayscheduler.png",
    "tech": [ "/react.Portfolio/icons/javascript.png", "/react.Portfolio/icons/bootstrap.png"]
  }
]

const projectsArray =

[
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
    "title": "dog friendly",
    "description": "",
    "gitHubLink": "https://github.com/Kanilionis/DogFriendlyDenver",
    "deployedLink": "https://kanilionis.github.io/DogFriendlyDenver/",
    "image": "/react.Portfolio/dogfriendlydenver.png"
  },
  
  {
    "id": 10,
    "title": "HR Manager",
    "description": "",
    "gitHubLink": "  https://github.com/Kanilionis/EmployeeTracker",
    "deployedLink": "",
    "image": "/react.Portfolio/employee-management.png"
  }
]


class Projects extends React.Component {
 
  state = {
    projectsArray: projectsArray,
    showCaseProj: showCaseProj
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
        <br></br>
        <Wrapper className="container-fluid project-wrapper">
          {/* <center> */}
          
          <Row className="">
          <Carousel controls={false} indicators={false} className=" col-md-7 col-sm-12 col-xs-12">
          {this.state.showCaseProj.map(project => (
            <Carousel.Item className="carousel-item">
            <ProjectCard {...project}/>
            </Carousel.Item>
         
          ))}
          </Carousel>
          {/* </center> */}
          <Col className="md-5 sm-12 xs-12">
            <Row>
            {this.state.projectsArray.map(card => (
            <OtherWorks {...card}/>
             
            ))}
            </Row>
            </Col>
          </Row>
          
        </Wrapper>
        <br></br>
        <br></br>
        
        <Footer/>
       

      </>
 
  )
}
}


export default Projects

