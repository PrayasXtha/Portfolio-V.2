// Navigation.js


import React, { useState, useEffect } from "react";
import Nav from "./navigation";
import "./firstpage_css.css";

function FirstPage() {
  const [currentWord, setCurrentWord] = useState("");
  const words = ["Full Stack Developer", "Software Developer", "UI/UX Developer", "Front End Developer"];
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
        
        <div id="Navigation">
       
       <Nav/>
         </div>
 

        <section id="First_Page">
        

        <div id="Right_Content" >

            
        <div id="context">
          <h2>Hello World, 
   
</h2> <h1>  Prayas Shrestha</h1>

<div className="flex">
              <h3 className="header-sub-title">{currentWord}</h3>
              <h3 className="header-sub-title blink">|</h3>
            </div>

<p>I am a detail-oriented software developer with a passion for creating applications that can help people in need, regardless of their age, education level, or background. My ultimate goal is to design and develop an application that solves real-world problems and makes a positive impact on society.
</p>

        </div>

                    
        <div id="context_pic">
        <img alt="ecommerce"  src="../../css/img/pp.gif"></img>
        </div>
   
     

  
     
    </div>
        </section>


          <section  id="Second_Page"> 

          <div id="content_first">

          <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/820x340"></img>
        <div class="text-center relative z-10 w-full">
          <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460"></img>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x420"></img>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
          </section>




          <section  id="Third_Page"> 


          <div id="Right_Content" >
            <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    
    

   

    <div  class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> 
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" data-gramm="false" wt-ignore-input="true"></textarea>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
    <img alt="ecommerce"  src="../../css/img/codebg.gif"></img>
  </div>
</section></div>
          
         </section>



  
</div>
  );
}

export default FirstPage;
