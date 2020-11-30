import React from "react"
import projects from "../projects";
import ProjectCard from "../components/ProjectCard"
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

  showProjectCard = (id) => {
    console.log(id)
    const projectArray = this.state.projects.filter( project => project.id !== id )
    console.log(projectArray)
    this.setState({projects: projectArray})
  }

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
        <Wrapper>
          {this.state.projects.map(project => (
          <ProjectCard 
          key={project.id} 
          id={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          />
          ))}
        </Wrapper>

      </>
 
  )
}
}


export default Projects

