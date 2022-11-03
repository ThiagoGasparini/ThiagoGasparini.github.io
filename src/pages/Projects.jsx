import React from 'react';
import Header from './Header';
import Footer from './Footer';
import results from '../utils/data';
import './pages-css/Projects.css';

const Projects = () => {
  return (
    <div>
      <Header />
      <h1 className="title">Projetos</h1>
      <span className="container">
        {results.map((result) => (
          <a target="_blank" href={result.github} rel="noreferrer">
            <div className="card">
              <p>{result.name}</p>
              <p>Tecnologia: {result.description}</p>
              <img className="img-projects" src={result.src} alt="" />
            </div>
          </a>
        ))}
      </span>
      <Footer />
    </div>
  );
};

export default Projects;
