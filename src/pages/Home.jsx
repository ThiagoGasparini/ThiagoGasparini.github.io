import React from "react";
import imgArrow from '../Images/flexa-removebg-preview.png';
import Header from "./Header";
import './pages-css/Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <img id="arrow" className="imgArrow" src={imgArrow} alt="" />
      <div className="name">
        <strong><em><div className="dev1">Thiago Gasparini</div></em></strong>
        <em><div className="dev">Desenvolvedor Web</div></em>
        <div className="div"></div>
      </div>
    </div>
  );
}

export default Home;