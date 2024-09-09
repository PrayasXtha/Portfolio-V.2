// Navigation.js


import React, { useState, useEffect } from "react";
import Nav from "./navigation";
import "./firstpage_css.css";
import Social from './socials.js';
import Home from './homepage.js';
import Projects from './projects.js';
import Services from './services.js';
import Skills from './skills.js';
import Contact from './contact.js';


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



  return (
    
    <div>
      {/* TOP Button */}
      {showTopButton && (
        <button onClick={topFunction} id="myBtn2" title="TOP" > <i class="fa-solid fa-chevron-up"></i></button>
      )}

      <a href="https://www.canva.com/design/DAGQMk-IIk4/6yaGyJXfpIyHPXa7TUznYw/edit?utm_content=DAGQMk-IIk4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="blank"> <button id="myBtn" title="Downlaod My Resume"> <i class="fa fa-download"></i> </button> </a>

       <Social />

 
       <Nav/>


        
   


       <Home/>

       <Projects/>
     
      <Services/>

      <Skills/>
      
 
      <Contact/>


      <footer>
      <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
      <a href="index.html">
          <img className="object-cover" src="../../css/img/prayassocials.jpg" alt="" id="pp" />
        </a>
        <span class="ml-3 text-xl sm:hidden md:hidden lg:block"> <b>Prayas Shrestha</b> </span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Dev/Design by your's truely.
        <a href="https://tenor.com/en-GB/view/bow-bowing-michael-scott-steve-carell-the-office-gif-1242852755589233352" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank"> <u className="hover:text-blue-500">Thank you for visiting my website!</u></a>
      </p>
    
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start sm:mr-20" id="social_footer">

      <a id='socials_fb' className="social_links" href="https://www.facebook.com/prayas.shrestha.98" target="_blank" >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a id='socials_insta' className="social_links" href="https://www.instagram.com/iam_prayas/" target="_blank" >
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a id='socials_git' className="social_links" href="https://github.com/PrayasXtha" target="_blank" >
          <i className="fa-brands fa-github"></i>
        </a>
        <a id='socials_linkedin' className="social_links" href="https://www.linkedin.com/in/prayas-shrestha-702a4223b/" target="_blank" >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </span>
      
    </div>
  </div>
      </footer>


  
</div>

  );




}

export default FirstPage;
