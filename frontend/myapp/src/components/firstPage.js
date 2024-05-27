// Navigation.js


import React, { useState, useEffect } from "react";
import Nav from "./navigation";
import "./firstpage_css.css";
import Social from './socials.js';
import Home from './homepage.js';
import Projects from './projects.js';

function FirstPage() {
 
  return (
    
    <div>
      
       <Social />

       <Nav/>
    
       <Home/>

       <Projects/>


         



          <section  id="Third_Page"> 


          <div id="Right_Content" >
       </div>
          
         </section>



  
</div>
  );
}

export default FirstPage;
