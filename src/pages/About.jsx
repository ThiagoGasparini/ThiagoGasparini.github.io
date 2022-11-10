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
            Me chamo Thiago Gasparini, tenho 29 anos de idade e moro em
            Curitiba-PR
          </p>
          <p>
            Graduado pelo Centro Universitário UniOpet em Engenharia Civil e
            atualmente estudante de Desenvolvimento Web Full Stack na Trybe.
          </p>
          <p>
            Com grande desejo de migrar para a área de desenvolvimento de
            software, que reverberou internamente por muito tempo em minha vida,
            decidi então iniciar minha transição de
            carreira em dezembro de 2021.
          </p>
          <p>
            Maravilhado pela conexão do front-end com o back-end, resolvi me
            desenvolver como Full Stack. Possuo conhecimentos em HTML5, CSS3,
            JavaScript, React.js, Testes Automatizados com Jest e RTL no front.
            MySQL, Docker, Node.js, TypeScript, POO, MongoDB e testes com Mocha
            e Sinon no back. Também estou estudando e me aprimorando com cursos
            pela Udemy.
          </p>
          <p>
            Sou apaixonado por tecnologia e como ela pode impactar e melhorar a
            nossa qualidade de vida.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
