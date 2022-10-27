import React from 'react';
import Header from './Header';
import results from '../utils/data';
import './css-components/Projects.css';

const Projects = () => {
  return (
    <div>
      <Header />
      <h1 className="title">Projetos</h1>
      <div className="cards">
        {results.map((result) => (
          <div>
            <p>{result.name}</p>
            <a target="_blank" href={result.github} rel="noreferrer">
              <img className="img-projects" src={result.src} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
