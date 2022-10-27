import React from 'react';
import results from '../utils/data';
import './css-components/Projects.css';

const Projects = () => {
  return (
    <div>
      <h1 className="title">Projetos</h1>
      <div className="cards">
        {results.map((result) => (
          <div>
            <p>{result.name}</p>
            <img className="img-projects" src={result.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
