import React from 'react';
import Header from './Header';
import Footer from './Footer';
import imgMe from '../Images/thiago.jpg';
import './pages-css/About.css';

const About = () => {
  const birthDay = 1993;
  const age = new Date().getFullYear() - birthDay;
  return (
    <div>
      <Header />
      <div className="about">
        <img className="imgMe" src={imgMe} alt="forMe" />
        <div className="aboutMe">
          <h1>Olá,</h1>
          <p>
            Me chamo Thiago Gasparini, tenho {age} anos de idade e moro em
            Curitiba-PR
          </p>
          <p>
            Sou Graduado pelo Centro Universitário UniOpet em Engenharia Civil e
            atualmente estudante de Desenvolvimento Web Full Stack na Trybe,
            escola que nos ensina a programar, a aprender e a trabalhar.
          </p>
          <p>
            Com grande desejo de migrar para a área de desenvolvimento de
            software, que reverberou internamente por muito tempo em minha vida,
            decidi que esse era o momento para realizar essa transição de
            carreira.
          </p>
          <p>
            Linguagens de programação extremamente essenciais para o mercado
            atual, como JavaScript, e, frameworks como React e Redux para o
            front-end; MySQL, Docker, Node.js, TypeScript, POO e MongoDB para o
            Back-end; Além de estruturas de dados utilizando Python, são
            tecnologias vistas durante o curso Full Stack da Trybe.
          </p>
          <p>
            Sou apaixonado por tecnologia e como ela pode facilitar e melhorar a
            nossa qualidade de vida.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
