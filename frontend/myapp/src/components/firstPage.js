// Navigation.js


import React, { useState, useEffect, useRef,  } from "react";
import Nav from "./navigation";
import "./firstpage_css.css";
import Social from './socials.js';
import Home from './homepage.js';
import Projects from './projects.js';
import Services from './services.js';
import Skills from './skills.js';
import Contact from './contact.js';
import Footer from "./footer.js";

import { useLocation, useNavigate} from "react-router-dom";  // Import useLocation

function FirstPage() {
  
  const [showTopButton, setShowTopButton] = useState(false);

  // Function to scroll to the top of the page
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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



  const projectsRef = useRef(null);  // Ref for the Projects section
  const location = useLocation();  // Hook to access location and passed state
  const navigate = useNavigate();  // For modifying the history

  // Function to scroll to the projects section
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

   // Detect if state is passed and scroll to the Projects section
   useEffect(() => {
    if (location.state?.scrollToProjects) {
      scrollToProjects();

      // After scrolling, clear the scrollToProjects state to prevent scrolling on page refresh
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);  // Ensure navigate is in the dependency array




  return (
    
    <div>
      {/* TOP Button */}
      {showTopButton && (
        <button onClick={topFunction} id="myBtn2" title="TOP" > <img src="../../css/img/rocket.gif"/> </button>
      )}

      <a href="https://www.canva.com/design/DAGQMk-IIk4/6yaGyJXfpIyHPXa7TUznYw/edit?utm_content=DAGQMk-IIk4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="blank"> <button id="myBtn" title="Downlaod My Resume"> <i class="fa fa-download"></i> </button> </a>

       <Social />

 
       <Nav/>


        
   


       <Home/>

       <div ref={projectsRef}>
        <Projects />
      </div>
     
      <Services/>

      <Skills/>
      
 
      <Contact/>


      <Footer/>


  
</div>

  );




}

export default FirstPage;
