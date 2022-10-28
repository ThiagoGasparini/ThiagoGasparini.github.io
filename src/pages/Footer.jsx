import React from 'react';
import imgGit from '../Images/picwish.png';
import imgLinkedin from '../Images/linkedin.png';
import './pages-css/Footer.css';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
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
          <p>2022 © Thiago Gasparini</p>
          <p>Desenvolvido com React.js</p>
      </div>
    </div>
  )
}

export default Footer;