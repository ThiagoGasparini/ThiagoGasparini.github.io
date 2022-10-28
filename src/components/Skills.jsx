import React from 'react';
import Header from './Header';
import imgEjs from '../Images/ejs.png';
import './css-components/Skills.css';

const Skills = () => {
  return (
    <div>
      <Header />
      <h1 className="title">Habilidades</h1>
      <span className="container">
        <div className="card-1">
          <h1>Front-end</h1>
          <div className="card-img">
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS3"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="JavaScript"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
              alt="React Router"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="Bootstrap"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
              alt="Redux"
              className="img"
            />
            <img src={imgEjs} alt="EJS" className="imgEjs" />
          </div>
        </div>

        <div className="card-2">
          <h1>Back-end</h1>
          <div className='card-img'>
            <img
              src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node.js"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
              alt="Express.js"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue"
              alt="Sequelize"
              className="img"
            />
            <img
              src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink"
              alt="Json Web Tokens"
              className="img"
            />
          </div>
        </div>
      </span>
    </div>
  );
};

export default Skills;
