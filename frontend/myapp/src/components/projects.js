import React from 'react'
import dh from '../img/diceheaven.png';
import el from '../img/op.png'

import { Link } from 'react-router-dom';


const Projects = () => {
  return (

       <section  id="Second_Page" > 

<div id="Right_Content">
    <div id='second_RC' data-aos="fade-up" data-aos-duration="2000">


  
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 py-4 sm:">
    <div class="p-4 lg:w-1/3 md:w-1/2 sm:mb-0 mb-6" 
      data-aos="fade-right"
   data-aos-duration="2500"
     >

        <div class="rounded-lg h-64 overflow-hidden">
        
              <img alt="content" class="object-cover object-center h-full w-full" src='../../css/img/notion.png'></img>
          
        </div>
        <h2 class="text-base font-medium title-font text-gray-900 mt-5">Notion Clone</h2>
       

       <ul id="lang_used">

      <li><i class="fa-brands fa-react"  style={{color: "#74C0FC",}}></i>React</li> 
      <li><i class="fa-solid fa-database" style={{color: "green",}}></i> Firebase</li>
      <li><i class="fa-brands fa-js" style={{color: "#FFD43B",}}></i> JavaScript</li>
      <li><i class="fa-brands fa-html5" style={{color: "#ff822e",}}></i>HTML</li>
      <li><i class="fa-brands fa-css3-alt" style={{color: "#0082e6",}}></i> CSS</li>

</ul>
      </div>
      <div class="p-4 lg:w-1/3 md:w-1/2 sm:mb-0 mb-6" 
      data-aos="fade-right"
   data-aos-duration="2500"
     >

        <div class="rounded-lg h-64 overflow-hidden">
        
          <img alt="content" class="object-cover object-center h-full w-full" src={dh}></img>
          
        </div>
        <h2 class="text-base font-medium title-font text-gray-900 mt-5">Ecommerce Website</h2>

       <ul id="lang_used">

      <li><i class="fa-brands fa-react"  style={{color: "#74C0FC",}}></i>React</li> 
      <li><i class="fa-solid fa-database" style={{color: "green",}}></i> MongoDB</li>
      <li><i class="fa-brands fa-js" style={{color: "#FFD43B",}}></i> JavaScript</li>
      <li><i class="fa-brands fa-html5" style={{color: "#ff822e",}}></i>HTML</li>
      <li><i class="fa-brands fa-css3-alt" style={{color: "#0082e6",}}></i> CSS</li>

</ul>
      </div>
      <div class="p-4 lg:w-1/3 sm:mb-0 mb-6 md:hidden lg:block" 
 >
  

        <div class="rounded-lg h-64 overflow-hidden">
           
              <img
                alt="content"
                className="project_img object-cover object-center h-full w-full "
                src={el}
              />
    
                </div>
                <h2 class="text-base font-medium title-font text-gray-900 mt-5">eLibrary </h2>
        
                <ul id="lang_used">

                <li><i class="fa-brands fa-react"  style={{color: "#74C0FC",}}></i>React</li>
                <li><i class="fa-solid fa-database" style={{color: "green",}}></i> MongoDB</li>
                <li><i class="fa-brands fa-js" style={{color: "#FFD43B",}}></i> JavaScript</li>
                <li><i class="fa-brands fa-html5" style={{color: "#ff822e",}}></i>HTML</li>
                <li><i class="fa-brands fa-css3-alt" style={{color: "#0082e6",}}></i> CSS</li>
          
                </ul>
          <br></br>
          
      
        
      </div>
 
    </div>

<Link class="text-gray-600 inline-flex items-center mt-3 hover:text-black" to="/projects" > <b><ul>Check out My Projects</ul></b> 
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>

</div>

</div>

</section>


  )
}

export default Projects
