import React, { useState, useEffect } from 'react';
import "./firstpage_css.css";
import { Link } from "react-scroll";

const Navigation = () => {


  return (
    <nav>
      <ul>
        <li>
          <Link to="First_Page" activeClass="active" spy={true} smooth={true}  duration={50}>Home</Link>
        </li>
        <li>
          <Link to="Second_Page" activeClass="active" spy={true} smooth={true}  duration={50} >Projects</Link>
        </li>
        <li>
          <Link to="Third_Page" activeClass="active" spy={true} smooth={true}  duration={50} >Start A Project</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
