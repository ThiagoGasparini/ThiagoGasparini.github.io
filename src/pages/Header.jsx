import React from 'react';
import imgGit from '../Images/picwish.png';
import imgLinkedin from '../Images/linkedin.png';
import { Link } from 'react-router-dom';
import './pages-css/Header.css';

const Header = () => {
  return (
    <div className='body'>
      <div className="header">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/thiagogasparini/"
          rel="noreferrer"
        >
          <img className="imgGit" src={imgLinkedin} alt="linkedin" />
        </a>
        <a
          target="_blank"
          href="https://github.com/ThiagoGasparini"
          rel="noreferrer"
        >
          <img className="imgGit" src={imgGit} alt="github" />
        </a>
        <Link to="/about" className="links">
          Sobre
        </Link>
        <Link to="/contact" className="links">
          Contatos
        </Link>
        <Link to="/projects" className="links">
          Projetos
        </Link>
        <Link to="/skills" className="links">
          Habilidades
        </Link>
        <Link to="/" className="links">
          Início
        </Link>
      </div>
    </div>
  );
};

export default Header;
