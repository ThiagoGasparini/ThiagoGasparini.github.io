import React from "react";
import { Link } from "react-router-dom";
import './css-components/Header.css';

const Header = () => {
  return (
    <span className="header">
      <Link to="/about" className="about">About</Link>
      <Link to="/contact" className="contact">Contact</Link>
      <Link to="/projects" className="projects">Projects</Link>
    </span>
  );
}

export default Header;