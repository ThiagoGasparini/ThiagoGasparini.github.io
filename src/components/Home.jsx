import React from "react";
import imgArrow from '../Images/flexa-removebg-preview.png';
import Header from "./Header";
import './css-components/Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <img className="imgArrow" src={imgArrow} alt="" />
      <div className="name">
        <strong><em><div>Thiago Gasparini</div></em></strong>
        <em><div>Full Stack Web Developer</div></em>
      </div>
    </div>
  );
}

export default Home;