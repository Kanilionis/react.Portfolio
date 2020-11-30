import React from "react";
import "../index.css"
// import github from "../images/github.png"
// import heroku from "../images/heroku.png"
// import gh from "../images/gh-pages.png"
// import projects from "../projects.json"

function ProjectCard(props){
  return (
    <>
    <div className="card">
      <img src={props.image} className="card-img-top" alt="project"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="card-body">
        <a className="card-link" href={props.gitHubLink}>Repository</a>
        <br></br>
        <a className="card-link" href={props.deployedLink}>Deployed</a>
      </div>
        </div>
        
      </div>
  

    </>
    )
  }

export default ProjectCard

    /* <div className="card">
      <img src={projects[0].image} className="card-img-top" alt="project"/>
      <div className="card-body">
      <h5 className="card-title">{projects.title}</h5>
      <p className="card-text">{projects.description}</p>
      </div>
      <div className="card-body">
      <img src={github} alt="github link" height="20px" width="auto" className="card-link" onClick={(projects.gitHubLink)}></img>
      <img src={heroku} alt="deployed app link" height="20px" width="auto" className="card-link" onClick={projects.deployedLink}></img>
      <img src={gh} alt="deployed app link" height="25px" width="auto" className="card-link" onClick={projects.deployedLink}></img>
      </div>
    </div>
    <div className="card">
      <img src={require("../images/budget-tracker.png")} className="card-img-top" alt="project"/>
      <div className="card-body">
      <h5 className="card-title">{projects.title}</h5>
      <p className="card-text">{projects.description}</p>
      </div>
      <div className="card-body">
      <img src={github} alt="github link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.gitHubLink)}}></img>
      <img src={heroku} alt="deployed app link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      <img src={gh} alt="deployed app link" height="25px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      </div>
    </div>
    <div className="card">
      <img src={require("../images/fitness-tracker.png")}  className="card-img-top" alt="project"/>
      <div className="card-body">
      <h5 className="card-title">{projects.title}</h5>
      <p className="card-text">{projects.description}</p>
      </div>
      <div className="card-body">
      <img src={github} alt="github link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.gitHubLink)}}></img>
      <img src={heroku} alt="deployed app link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      <img src={gh} alt="deployed app link" height="25px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      </div>
    </div>
    <div className="card">
      <img src={require("../images/burgerlogger.png")} className="card-img-top" alt="project"/>
      <div className="card-body">
      <h5 className="card-title">{projects.title}</h5>
      <p className="card-text">{projects.description}</p>
      </div>
      <div className="card-body">
      <img src={github} alt="github link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.gitHubLink)}}></img>
      <img src={heroku} alt="deployed app link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      <img src={gh} alt="deployed app link" height="25px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      </div>
    </div>
    <div className="card">
      <img src={require("../images/note-taker.png")}  className="card-img-top" alt="project"/>
      <div className="card-body">
      <h5 className="card-title">{projects.title}</h5>
      <p className="card-text">{projects.description}</p>
      </div>
      <div className="card-body">
      <img src={github} alt="github link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.gitHubLink)}}></img>
      <img src={heroku} alt="deployed app link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      <img src={gh} alt="deployed app link" height="25px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      </div>
    </div>
    <div className="card">
      <img src={require("../images/github.png")}  className="card-img-top" alt="project"/>
      <div className="card-body">
      <h5 className="card-title">{projects.title}</h5>
      <p className="card-text">{projects.description}</p>
      </div>
      <div className="card-body">
      <img src={github} alt="github link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.gitHubLink)}}></img>
      <img src={heroku} alt="deployed app link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      <img src={gh} alt="deployed app link" height="25px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      </div>
    </div>
    <div className="card">
      <img src={require("../images/dogfriendlydenver.png")}  className="card-img-top" alt="project"/>
      <div className="card-body">
      <h5 className="card-title">{projects.title}</h5>
      <p className="card-text">{projects.description}</p>
      </div>
      <div className="card-body">
      <img src={github} alt="github link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.gitHubLink)}}></img>
      <img src={heroku} alt="deployed app link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      <img src={gh} alt="deployed app link" height="25px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      </div>
    </div>
    <div className="card">
      <img src={require("../images/workdayscheduler.png")}  className="card-img-top" alt="project"/>
      <div className="card-body">
      <h5 className="card-title">{projects.title}</h5>
      <p className="card-text">{projects.description}</p>
      </div>
      <div className="card-body">
      <img src={github} alt="github link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.gitHubLink)}}></img>
      <img src={heroku} alt="deployed app link" height="20px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      <img src={gh} alt="deployed app link" height="25px" width="auto" className="card-link" onClick={ function(){projects.showProjectCard(projects.deployedLink)}}></img>
      </div>
    </div>
     */
   




