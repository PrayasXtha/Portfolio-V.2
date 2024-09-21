import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "./footer";
import { projectsTemp } from "../resource/projectsTemp";
import ResumeUpButtons from "./resumeUpButtons";
import { useEffect } from "react";

import { useSelector } from "react-redux";

function ProjectDetails() {

    //dynamic Data
    const { portfolioData } = useSelector((state) => state.root);
    const {projects} = portfolioData;

    
  const { id } = useParams(); // Get the project ID from the URL
  const project = projects.find((project) => project._id === id); // Find the project by ID
  
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/projects"); // Navigate back to projects page
  };

    // Scroll to top when the component is mounted
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures this runs only on component mount
  

  if (!project) {
    return <p>Project not found.</p>;
  }


  



  return (
    <div id="projectPage">
    
    <ResumeUpButtons/>

      {/* Back button */}
      <button
        className="text-grey-900 inline-flex items-center mt-3 hover:text-blue-500 sticky left-5 top-10 z-10"
        onClick={handleBackClick}
      >
        <i className="fa-solid fa-circle-arrow-left"></i> Back
      </button>

      {/* Socials----------------------------------------------------------------------------------------------- */}
      <div
        id="social"
        style={{ position: "absolute", width: "100%", zIndex: "0" }}
      >
        <a
          id="socials_fb"
          className="social_links"
          href="https://www.facebook.com/prayas.shrestha.98"
          target="_blank"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          id="socials_insta"
          className="social_links"
          href="https://www.instagram.com/iam_prayas/"
          target="_blank"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="index.html">
          <img src="../../css/img/prayassocials.jpg" alt="" id="pp" />
        </a>
        <a
          id="socials_git"
          className="social_links"
          href="https://github.com/PrayasXtha"
          target="_blank"
          data-aos="fade-down"
          data-aos-delay="150"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          id="socials_linkedin"
          className="social_links"
          href="https://www.linkedin.com/in/prayas-shrestha-702a4223b/"
          target="_blank"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      {/* Socials----------------------------------------------------------------------------------------------- */}

      <section className="text-gray-600 body-font p-20 py-22">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-black"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 justify-between">
              <div className="mb-10">
              <h1 className=" text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                {project.projectTitle}
              
              </h1>
              <span className="">{project.projectYear}</span>
              </div>
       
              <p className="bg-gray-200/50 p-2 rounded-lg sm:w-3/5 leading-relaxed text-black sm: px-7 py-7   ">
                <h1 className="text-black-900 font-bold">BRIEF</h1>
                {project.projectDes}
              </p>
            </div>
            <div className="flex" data-aos="zoom-out">
              <img src={project.projectImgMultiMedia}></img>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
              <div className="bg-gray-200/50 p-7 rounded-lg sm:w-2/3 leading-relaxed text-black">
                <h1 className="text-black-900 font-bold">DESCRIPTION</h1>
                <p>{project.projectFullDes}</p>
              </div>

              <div className="flex flex-wrap justify-center m-10 w-80 ">
                
                {project.projectLang.map((lang, index) => (
                  <span
                    key={index}
                    className="bg-gray-500  m-2 text-white text-center px-4 py-2 rounded" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center p-10">
              <a href={project.projectDemoLink} target="blank">
                {" "}
                <button className=" px-6 py-3 bg-black rounded text-white mr-5 hover-opacity" >
                  DEMO
                </button>
              </a>
              <span>OR</span>
              <a href={project.projectGitLink} target="blank">
                <button className="  px-6 py-3  bg-black rounded text-white ml-5 hover-opacity">
                  CODE
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProjectDetails;
