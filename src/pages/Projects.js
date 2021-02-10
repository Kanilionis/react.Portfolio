import React from "react"
import projects from "../projects.json"
import ProjectCard from "../components/Projects/ProjectCard"
import Footer from "../components/Footer/Footer"
import {Carousel, Row, Col} from "react-bootstrap"
import Wrapper from "../components/Wrapper"
import "../index.css"
var myWork = "{ . . . m y W o r k }"



class Projects extends React.Component {
 
  state = {
    projects: projects
  };

  componentDidMount(){
    console.log(projects)
    this.setState({projects: projects})
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
          
    
          <Carousel ariaHidden={false}>
         
          {this.state.projects.map(project => (
            
            <Carousel.Item className="carousel-item col-md-12">

            <ProjectCard {...project}/>
            </Carousel.Item>   

          ))}
         </Carousel>

          
        </Wrapper>
        <br></br>
        <br></br>
        
        <Footer/>
       

      </>
 
  )
}
}


export default Projects

