import React, { useState, useEffect } from "react";
import "./firstpage_css.css";

import {useSelector} from 'react-redux';

import { Link } from "react-scroll";

const Homepage = () => {

  //dynamic datas from database:

  const { portfolioData } = useSelector((state) => state.root);

  const { homes } = portfolioData;

  const {aboutDes, openToWork , jobTitles} = homes;

/////////////////////////////////////////////////////////////////////////////////////////////


  const [currentWord, setCurrentWord] = useState("");
  const words = jobTitles;
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

    var loopTyping = function (index = 0) {
      // Changed 'i' to 'index' to avoid confusion with the outer 'i'
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

    var loopDeleting = function (index = word.length - 1) {
      // Changed 'i' to 'index' to avoid confusion with the outer 'i'
      if (index >= 0) {
        setCurrentWord((prevWord) => prevWord.slice(0, -1));

        timer = setTimeout(() => loopDeleting(index - 1), 100); // Adjust the timeout value as needed (e.g., 100 milliseconds)
      } else {
        if (words.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
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
          <div
            id="context"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            <h2>Hi, I am</h2> <h1> PRAYAS SHRESTHA</h1>
            <div className="flex">
              <h3 className="header-sub-title">{currentWord}</h3>
              
              <h3 className="header-sub-title blink">|</h3>
            </div>
     
            <p>
              {aboutDes || ''}
            </p>
            <br></br>

            <Link to="Fifth_Page" id="my_qualitiess">
              <li id={ openToWork === "Yes." ? "otw" : "none"} title="CLICK ME!" >
                <i
                  class="fa-solid fa-door-open"
                  style={{ color: openToWork === "Yes." ? "green" : "red" }}
                ></i>{" "}
               
                   <span>Am I Open For Opportunities? </span> <span  className=" otwAns">{openToWork}  </span>
              </li></Link>
            <ul id="my_qualities">
      
              <li>
                <i
                  class="fa-solid fa-user-secret"
                  style={{ color: "black" }}
                ></i>{" "}
                Strong Technical Skills
              </li>
              <li>
                <i class="fa-solid fa-bolt" style={{ color: "#FFD43B" }}></i>{" "}
                Adaptability
              </li>
        
              <li>
                <i class="fa-solid fa-brain" style={{ color: "#e599c6" }}></i>{" "}
                Creativity and Innovation
              </li>
              <li>
                <i
                  class="fa-solid fa-magnifying-glass"
                  style={{ color: "#347efe" }}
                ></i>{" "}
                Problem-Solving Skills
              </li>
            </ul>
          </div>

          <div id="context_pic" data-aos="fade-up-right">
            <img alt="ecommerce" src="../../css/img/pp.gif"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
