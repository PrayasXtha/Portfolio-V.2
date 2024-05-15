import React, { useState, useEffect } from 'react';
import "./firstpage_css.css";
import { Link } from "react-scroll";

const Navigation = () => {
  const [activePage, setActivePage] = useState('Home');

  useEffect(() => {
    const handlePageChange = () => {
      // Logic to detect page change (e.g., scroll event)
      // Update the activePage state accordingly
      // For demonstration, let's assume active page changes based on scroll position
      const scrollTop = window.scrollY;
      if (scrollTop < 1000) {
        setActivePage('Home');
      } else if (scrollTop >= 1000 && scrollTop < 2000) { // Assuming each page is 100vh
        setActivePage('Projects');
      } else {
        setActivePage('Start A Project');
      }
    };
    

    // Add event listener for page change detection
    window.addEventListener('scroll', handlePageChange);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handlePageChange);
    };
  }, []); // Ensure it only runs once on component mount

  // Function to get the image for the active page
  const getImageForPage = () => {
    switch (activePage) {
      case 'Home':
        return "../../css/img/navlogo11.gif";
      case 'Projects':
        return "../../css/img/navlogo22.gif";
      case 'Start A Project':
        return "../../css/img/navlogo33.gif";
      
    }
  };

  return (
    <nav>
      <img className='navlogo' alt="ecommerce" src={getImageForPage()} />
      <ul>
        <li>
          <Link to="First_Page" activeClass="active" spy={true} smooth={true} duration={50}>Home</Link>
        </li>
        <li>
          <Link to="Second_Page" activeClass="active" spy={true} smooth={true} duration={50}>Projects</Link>
        </li>
        <li>
          <Link to="Third_Page" activeClass="active" spy={true} smooth={true} duration={50}>Start A Project</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
