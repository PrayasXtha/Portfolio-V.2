import React, { useState, useEffect } from 'react';
import "./firstpage_css.css";
import { Link } from "react-scroll";
import navlogo11 from "../img/navlogo11.gif";
import navlogo22 from "../img/navlogo22.gif";
import navlogo33 from "../img/navlogo33.gif";
import Services from "../img/services.gif";
import Skills from "../img/skills.gif";

const Navigation = () => {
  const [activePage, setActivePage] = useState('Home');


  const getImageForPage = () => {
    switch (activePage) {
      case 'Home':
        return navlogo11;
      case 'Projects':
        return navlogo22;
      case 'Services':
        return Services;
      case 'Skills':
        return Skills;
      case 'Start A Project':
        return navlogo33;
      default:
        return navlogo11;
    }
  };

  const [showTopButton, setShowTopButton] = useState(false);


  // Show or hide the top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  //hamburgerMenu for mobile view

  const [menuActive, setMenuActive] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false); // Close the menu
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    closeMenu(); // Close the menu after a link is clicked
  };

  return (
    <nav id="Navigation" className={`off-screen-menu ${menuActive ? 'active' : ''}`}>
      <img className='navlogo' alt="ecommerce" src={getImageForPage()} />
      <ul className={menuActive ? 'menu-open' : ''}>
        <li>
          <Link to="First_Page" activeClass="active" spy={true} smooth={true} duration={100} onSetActive={() => handleNavClick('Home')}>Home</Link>
        </li>
        <li>
          <Link to="Second_Page" activeClass="active" spy={true} smooth={true} duration={100} onSetActive={() => handleNavClick('Projects')}>My Projects</Link>
        </li>
        <li>
          <Link to="Third_Page" activeClass="active" spy={true} smooth={true} duration={100} onSetActive={() => handleNavClick('Services')}>Passion</Link>
        </li>
        <li>
          <Link to="Fourth_Page" activeClass="active" spy={true} smooth={true} duration={100} onSetActive={() => handleNavClick('Skills')}>Experience</Link>
        </li>
        <li>
          <Link to="Fifth_Page" activeClass="active" spy={true} smooth={true} duration={100} onSetActive={() => handleNavClick('Start A Project')}>Start A Project</Link>
        </li>
      </ul>

      {/* Hamburger menu for navigation */}
        {showTopButton && (
      <div className={`ham-menu ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        )}
    </nav>
  );
};

export default Navigation;
