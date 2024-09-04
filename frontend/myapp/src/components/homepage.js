
import React, { useState, useEffect } from "react";
import "./firstpage_css.css";


const Homepage = () => {
    const [currentWord, setCurrentWord] = useState("");
    const words = ["Front End Designer","Front End Developer","Full Stack Developer", "Software Developer", "UI/UX Designer" ];
    let i = 0;
    let timer;
  
    useEffect(() => {
      typingEffect();
      return () => {
        clearTimeout(timer);
      };
    }, []); // Run the effect only once after the component is mounted
  
    function typingEffect() {
      setCurrentWord(""); // Clear current word before typing a new one
      let word = words[i].split("");
  
      var loopTyping = function (index = 0) { // Changed 'i' to 'index' to avoid confusion with the outer 'i'
        if (index < word.length) {
          setCurrentWord((prevWord) => prevWord + word[index]);
  
          timer = setTimeout(() => loopTyping(index + 1), 100); // Adjust the timeout value as needed (e.g., 100 milliseconds)
        } else {
          setTimeout(deletingEffect, 1000); // Wait for 1 second before starting deletion
          return false;
        }
      };
      loopTyping();
    }
  
    function deletingEffect() {
      let word = words[i].split("");
  
      var loopDeleting = function (index = word.length - 1) { // Changed 'i' to 'index' to avoid confusion with the outer 'i'
        if (index >= 0) {
          setCurrentWord((prevWord) => prevWord.slice(0, -1));
  
          timer = setTimeout(() => loopDeleting(index - 1), 100); // Adjust the timeout value as needed (e.g., 100 milliseconds)
        } else {
          if (words.length > (i + 1)) {
            i++;
          } else {
            i = 0;
          };
          typingEffect();
          return false;
        }
      };
      loopDeleting();
    }
  
  return (
    <div>
     <section id="First_Page">
       
       <div id="Right_Content">

                        
            <div id="context" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine">
            <h2>Hi, I am

            </h2> <h1>  PRAYAS SHRESTHA</h1>

            <div className="flex">
                <h3 className="header-sub-title">{currentWord}</h3>
                <h3 className="header-sub-title blink">|</h3>
                </div>

            <p>I am a detail-oriented software developer with a passion for creating applications that can help people in need, regardless of their age, education level, or background. My ultimate goal is to design and develop an application that solves real-world problems and makes a positive impact on society.
            </p>
            <br></br>
            <ul id="my_qualities">

            <li><i class="fa-solid fa-door-open" style={{color: "#d60000",}}></i> Open for Work</li>
            <li><i class="fa-solid fa-user-secret" style={{color: "black",}}></i> Strong Technical Skills</li><br></br>
            <li><i class="fa-solid fa-bolt" style={{color: "#FFD43B",}}></i> Adaptability</li>
            <li><i class="fa-solid fa-people-group" style={{color: "#74C0FC",}}></i>Team Player</li>
            <li><i class="fa-solid fa-brain"style={{color: "#e599c6",}}></i> Creativity and Innovation</li>
            <li><i class="fa-solid fa-magnifying-glass"style={{color: "#347efe",}}></i> Problem-Solving Skills</li>
            </ul>
          

            </div>

                        
            <div id="context_pic" data-aos="fade-up-left" >
            <img alt="ecommerce"  src="../../css/img/pp.gif"></img>
            </div>





</div>
 </section>
    </div>
   
  )
}

export default Homepage
