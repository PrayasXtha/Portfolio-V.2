import React from 'react'
import dh from '../img/diceheaven.png';
import el from '../img/op.png'
import { projectsTemp } from '../resource/projectsTemp';

import { Link } from 'react-router-dom';


const Projects = () => {
  return (

       <section  id="Second_Page" > 

<div id="Right_Content">
    <div id='second_RC' data-aos="fade-up" data-aos-duration="2000">


  
      {projectsTemp.slice().reverse().slice(0, 1).map ((projects) => (

<section class="text-gray-600 body-font">
<span className='p-5 text-gray-800 font-bold'>LATEST PROJECT <i class="fa-solid fa-fire text-red-600"></i></span>
<div class="container mx-auto flex px-5 py-16 md:flex-row sm:flex-col items-center">
 
  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <img class="object-cover object-center rounded" alt="hero" src={projects.projectImg}/>
  </div>
  <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{projects.projectTitle}

    </h1>
    <p class="mb-8 leading-relaxed">{projects.projectDes}</p>
    <div class="flex justify-center">
        <a href={projects.projectDemoLink}> <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg" >Demo</button> </a> 
        <a href={projects.projectGitLink}>  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Code</button> </a> 
    </div>
  </div>
</div>
</section>
      ))}

<Link class="text-gray-600 inline-flex items-center mt-3 hover:text-black" to="/projects" > <b><ul>Check out My Other Projects</ul></b> 
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
