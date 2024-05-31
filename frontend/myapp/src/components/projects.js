import React from 'react'
import dh from '../img/diceheaven.png';
import el from '../img/op.png'
import pp from '../img/project_pp.png';

const Projects = () => {
  return (
    <div>
       <section  id="Second_Page" > 

<div id="Right_Content">
    <div id='second_RC' data-aos="fade-up" data-aos-duration="2000">


    <div class="flex flex-col">
   
   
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 py-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <a className='hover-opacity' href='https://edicehaven-shop.onrender.com/' target='blank'>
        <div class="rounded-lg h-64 overflow-hidden">
        
          <img alt="content" class="object-cover object-center h-full w-full" src={dh}></img>
          
        </div>
        <h2 class="text-base font-medium title-font text-gray-900 mt-5">Board Games Ecommerce App </h2>
        <p class="text-sm leading-relaxed mt-2">We developed an e-commerce platform with a user-friendly interface and a wide selection of board games from classic to modern targeting every audience groups.</p>
       </a>
       <ul id="lang_used">

<li><i class="fa-brands fa-react"  style={{color: "#74C0FC",}}></i>React</li> 
<li><i class="fa-solid fa-database" style={{color: "green",}}></i> MongoDB</li>
<li><i class="fa-brands fa-js" style={{color: "#FFD43B",}}></i> JavaScript</li>
<li><i class="fa-brands fa-html5" style={{color: "#ff822e",}}></i>HTML</li>
<li><i class="fa-brands fa-css3-alt" style={{color: "#0082e6",}}></i> CSS</li>

</ul>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <a className='hover-opacity' href='https://edicehaven-shop.onrender.com/' target='blank'> 

        <div class="rounded-lg h-64 overflow-hidden">
             
                <a href='https://edicehaven-shop.onrender.com/'>
              <img
                alt="content"
                className="project_img object-cover object-center h-full w-full "
                src={el}
              />
            </a>
                </div>
                <h2 class="text-base font-medium title-font text-gray-900 mt-5">eLibrary (Using MERN Stack)</h2>
                <p class="text-sm leading-relaxed mt-2">An basic eLibrary dedicated to providing fans of the popular manga and anime series "One Piece" with a centralized platform to sell and buy content related to the series.</p>
                </a>
                <ul id="lang_used">

                <li><i class="fa-brands fa-react"  style={{color: "#74C0FC",}}></i>React</li>
                <li><i class="fa-solid fa-database" style={{color: "green",}}></i> MongoDB</li>
                <li><i class="fa-brands fa-js" style={{color: "#FFD43B",}}></i> JavaScript</li>
                <li><i class="fa-brands fa-html5" style={{color: "#ff822e",}}></i>HTML</li>
                <li><i class="fa-brands fa-css3-alt" style={{color: "#0082e6",}}></i> CSS</li>
          
                </ul>
          <br></br>
          
        <a class="text-blue-500 inline-flex items-center mt-3" href='https://github.com/PrayasXtha?tab=repositories' target='blank'> More Projects
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <a className='hover-opacity' href='https://prayasxtha.github.io/' target='blank'>
        <div class="rounded-lg h-64 overflow-hidden">
          <img 
          alt="content" 
          class="object-cover object-center h-full w-full"  
          src={pp}></img>
        </div>
        <h2 class="text-base font-medium title-font text-gray-900 mt-5"> Personal Portifolio Template</h2>
        <p class="text-sm leading-relaxed mt-2">This portfolio template showcases my experience in developing innovative software solutions and my proficiency in a variety of programming languages and technologies.</p>
      </a>
      <ul id="lang_used">



<li><i class="fa-brands fa-js" style={{color: "#FFD43B",}}></i> JavaScript</li>
<li><i class="fa-brands fa-html5" style={{color: "#ff822e",}}></i>HTML</li>
<li><i class="fa-brands fa-css3-alt" style={{color: "#0082e6",}}></i> CSS</li>

</ul>
      </div>
    </div>


</div>
</div>
</section>

    </div>
  )
}

export default Projects
