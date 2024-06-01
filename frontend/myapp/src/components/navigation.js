import React, { useState} from 'react';
import "./firstpage_css.css";
import { Link } from "react-scroll";
import navlogo11 from "../img/navlogo11.gif";
import navlogo22 from "../img/navlogo22.gif";
import navlogo33 from "../img/navlogo33.gif";
const Navigation = () => {
  
  const [activePage, setActivePage] = useState('Home');

  const getImageForPage = () => {
    switch (activePage) {
      case 'Home':
        return navlogo11;
      case 'Projects':
        return navlogo22;
      case 'Start A Project':
        return navlogo33;
      default:
        return navlogo11;
    }
  };

  return (    

    <nav id="Navigation">
        
      <img className='navlogo' alt="ecommerce" src={getImageForPage()} />
      <ul>
        <li>
          <Link to="First_Page" activeClass="active" spy={true} smooth={true} duration={100 } onSetActive={() => setActivePage('Home')}>Home</Link>
        </li>
        <li>
          <Link to="Second_Page" activeClass="active" spy={true} smooth={true} duration={100} onSetActive={() => setActivePage('Projects')}>My Projects</Link>
        </li>
        <li>
          <Link to="Third_Page" activeClass="active" spy={true} smooth={true} duration={100} onSetActive={() => setActivePage('Services')}>Services</Link>
        </li>
        <li>
          <Link to="Fourth_Page" activeClass="active" spy={true} smooth={true} duration={100} onSetActive={() => setActivePage('Skills')}>Skills</Link>
        </li>
        <li>
          <Link to="Fifth_Page" activeClass="active" spy={true} smooth={true} duration={100} onSetActive={() => setActivePage('Start A Project')}>Start A Project</Link>
        </li>
      </ul>
   
    </nav>   

  );
};

export default Navigation;
