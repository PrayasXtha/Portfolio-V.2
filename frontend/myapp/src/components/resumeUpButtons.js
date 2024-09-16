import React from 'react'
import { useState, useEffect, useRef,  } from "react";

function ResumeUpButtons() {
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
        <button onClick={topFunction} id="myBtn2" title="TOP" > <img src="../../css/img/rocket.gif"/> </button>
      )}

      <a href="https://www.canva.com/design/DAGQMk-IIk4/6yaGyJXfpIyHPXa7TUznYw/edit?utm_content=DAGQMk-IIk4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="blank"> <button id="myBtn" title="Downlaod My Resume"> <img src="../../css/img/downloadResume.gif"/> </button> </a>

    </div>
  )
}

export default ResumeUpButtons
