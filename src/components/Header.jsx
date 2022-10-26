import React from 'react';
import imgGit from '../Images/picwish.png';
import imgLinkedin from '../Images/linkedin.png';
import { Link } from 'react-router-dom';
import './css-components/Header.css';

const Header = () => {
  return (
    <div>
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
        <Link to="/about" className="about">
          About
        </Link>
        <Link to="/contact" className="contact">
          Contact
        </Link>
        <Link to="/projects" className="projects">
          Projects
        </Link>
        <Link to="/skills" className="projects">
          Skills
        </Link>
      </div>
    </div>
  );
};

export default Header;
