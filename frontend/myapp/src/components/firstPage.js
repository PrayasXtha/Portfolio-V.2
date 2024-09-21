// Navigation.js

import React, { useState, useEffect, useRef } from "react";
import Nav from "./navigation";
import "./firstpage_css.css";
import Social from "./socials.js";
import Home from "./homepage.js";
import Projects from "./projects.js";
import Services from "./services.js";
import Skills from "./skills.js";
import Contact from "./contact.js";
import Footer from "./footer.js";
import ResumeUpButtons from "./resumeUpButtons.js";


import { useSelector } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation

function FirstPage() {


  const projectsRef = useRef(null); // Ref for the Projects section
  const location = useLocation(); // Hook to access location and passed state
  const navigate = useNavigate(); // For modifying the history

  // Function to scroll to the projects section
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect if state is passed and scroll to the Projects section
  useEffect(() => {
    if (location.state?.scrollToProjects  && location.key !== "default") {
      scrollToProjects();

      // After scrolling, clear the scrollToProjects state to prevent scrolling on page refresh
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]); // Ensure navigate is in the dependency array

  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
     
      
      {portfolioData && (
        <>
         <ResumeUpButtons />

      <Social />

      <Nav />
          <Home />

          <div ref={projectsRef}>
            <Projects />
          </div>

          <Services />

          <Skills />

          <Contact />

          <Footer />
        </>
      )}

    </div>
  );
}

export default FirstPage;
