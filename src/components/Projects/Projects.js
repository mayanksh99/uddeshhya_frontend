import React from "react";
import {Link} from "react-router-dom";

const Projects = props => {
  let { projects } = props;
  return (
    <div className="project">
      <div className="container mt-5">
        <p
          className="abt"
          style={{ color: "rgba(213, 8, 8, 0.8)", padding: 0, margin: 0 }}
        >
          Our Projects
        </p>
        <div className="row mt-4">
          {projects.map(project => {
            return (
              <div className="col-lg-4" key={project._id}>
                <div className="card card_img mb-4" style={{background: `linear-gradient(89.35deg, rgba(241, 241, 241, 0.8) 31.39%, rgba(255, 255, 255, 0) 99.74%), url(${project.img.url})`}} />
                <p className="card_body crd mb-2"><b>{project.title}</b></p>
                <p>{project.description.slice(0, 150)}...<Link to={`/projects/${project._id}`}><b>Read More</b></Link></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
