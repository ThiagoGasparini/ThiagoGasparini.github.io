import React from 'react';
import Header from './Header';
import Footer from './Footer';
import imgMe from '../Images/thiago.jpg';
import './pages-css/About.css';

const About = () => {
  return (
    <div>
      <Header />
      <div className="about">
        <img className="imgMe" src={imgMe} alt="forMe" />
        <div className="aboutMe">
          <h1 className="title">Olá,</h1>
          <p>
            Me chamo Thiago Gasparini, tenho 29 anos e sou graduado em
            Engenharia Civil.
          </p>
          <p>
            Por não ter me identificado com as áreas da minha graduação e com
            grande desejo de migrar para o desenvolvimento de software, que
            reverberou internamente por muito tempo em minha vida, decidi então
            iniciar minha transição de carreira para o mundo da programação em
            dezembro de 2021.
          </p>
          <p>
            Atualmente sou estudante de desenvolvimento Web Full Stack na Trybe,
            faço alguns cursos profissionalizantes pela Udemy e já realizei
            alguns projetos, como consta em meu portfólio, linkedin e github.
          </p>
          <p>
            Maravilhado pela conexão do Front-end com o Back-end, resolvi me
            aprofundar na carreira como Full Stack. Possuo conhecimentos em
            HTML5, CSS3, JavaScript, React.js, EJS, Testes unitários com Jest e
            RTL no Front-end. MySQL, PostgreSQL, Docker, Node.js, Express.js,
            Sequelize, TypeORM, TypeScript, POO, MongoDB e testes com Mocha,
            Chai e Sinon no Back-end. Assim como metodologias ágeis (SCRUM e
            KANBAN).
          </p>
          <p>
            Sou apaixonado por tecnologia e como ela pode impactar e melhorar a
            qualidade de vida das pessoas.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
