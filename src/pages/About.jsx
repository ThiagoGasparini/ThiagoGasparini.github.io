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
            Gostaria de me apresentar formalmente: meu nome é Thiago Gasparini,
            tenho 30 anos e atualmente estou cursando Análise e Desenvolvimento
            de Sistemas na PUCPR, com previsão de conclusão para julho de 2026.
            Além disso, possuo uma graduação completa em Engenharia Civil, mas
            decidi migrar para o desenvolvimento de software em dezembro de
            2021.
          </p>
          <p>
            Completei o curso de Desenvolvimento Web Full Stack pela Trybe em
            fevereiro de 2023, complementando minha formação com alguns cursos
            profissionalizantes na Udemy e JStack. Atualmente, estou cursando
            Análise e Desenvolvimento de Sistemas na PUCPR, como mencionado
            anteriormente. Ao longo desse período, realizei diversos projetos
            práticos de programação, os quais estão disponíveis em meu
            portfólio, LinkedIn e GitHub.
          </p>
          <p>
            Tenho conhecimento em desenvolvimento Front-end (HTML5, CSS3,
            JavaScript, TypeScript, React.js) e Back-end (MySQL, PostgreSQL,
            Node.js, Express.js, Docker). No meu curso de Análise e
            Desenvolvimento de Sistemas, as disciplinas abrangem temas como Web,
            Dispositivos Móveis, Big Data, IoT, Banco de Dados, Engenharia de
            Software e Gestão de Projetos, assim como metodologias ágeis (SCRUM
            e KANBAN).
          </p>
          <p>
            Nutro uma paixão pela tecnologia e pela forma como ela pode impactar
            e melhorar a qualidade de vida das pessoas.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
