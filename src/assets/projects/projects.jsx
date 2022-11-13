import React from "react";
import "./projects.css";

const Projects = (props) => {
  return (
    <div className="projects__container" id={props.id}>
      <div className="projects__media">
        <video src={props.media} height="250px" width="400px" controls />
      </div>
      <div className="projects__description">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className="projects__description_links">
          <a href={props.giturl} target="_blank">
            Click link to view code on github
          </a>
          <a href={props.url} target="_blank">
            Click link to view published version
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
