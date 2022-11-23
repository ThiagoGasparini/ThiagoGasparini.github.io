import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import results from '../utils/data';
import './pages-css/Projects.css';

const Projects = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [fullstack, setFullstack] = useState([]);
 
  const allBtn = () => {
    setFrontend([]);
    setBackend([]);
    setFullstack([]);
  };

  const frontBtn = () => {
    const frontendBtn = results.filter((result) => result.type === 'frontend');
    setFrontend(frontendBtn);
  };

  const backBtn = () => {
    const backendBtn = results.filter((result) => result.type === 'backend');
    setBackend(backendBtn);
  };

  const fullBtn = () => {
    const fullstackBtn = results.filter(
      (result) => result.type === 'fullstack'
    );
    setFullstack(fullstackBtn);
  };

  const maps = (array) =>
    array.map((result) => (
      <a target="_blank" href={result.github} rel="noreferrer">
        <div className="card">
          <p>{result.name}</p>
          <p>Tecnologia: {result.description}</p>
          <img className="img-projects" src={result.src} alt="" />
        </div>
      </a>
    ));

  return (
    <div>
      <Header />
      <h1 className="title">Projetos</h1>
      <div className='btns'>
        <button className='btn' onClick={allBtn}>Todos</button>
        <button className='btn' onClick={frontBtn}>Frontend</button>
        <button className='btn' onClick={backBtn}>Backend</button>
        <button className='btn' onClick={fullBtn}>Fullstack</button>
      </div>
      <span className="container">
        {fullstack.length
          ? maps(fullstack)
          : backend.length
          ? maps(backend)
          : frontend.length
          ? maps(frontend)
          : maps(results)}
      </span>
      <Footer />
    </div>
  );
};

export default Projects;
