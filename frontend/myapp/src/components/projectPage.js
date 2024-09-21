import React   from "react";

import pp from "../img/project_pp.png";
import Socials from "./socials";
import Footer from "./footer";
import { Link, useNavigate } from "react-router-dom";
import { projectsTemp } from "../resource/projectsTemp";
import ResumeUpButtons from "./resumeUpButtons.js";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function ProjectPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/", { state: { scrollToProjects: true } }); // Pass scrollToProjects state
    
  };

  //dynamic Data
  const { portfolioData } = useSelector((state) => state.root) || {};
  const projects = portfolioData?.projects || [];
  const myprojectsdes = portfolioData?.myprojectsdes || "";
  
   // Scroll to top when the component is mounted
   useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures this runs only on component mount

  
  return (




    <div id="projectPage">

    <ResumeUpButtons/>
      {/* Back button */}
      <button
        className="text-grey-900 inline-flex items-center mt-3 hover:text-blue-500 sticky left-5 top-10 z-10"
        onClick={handleBackClick} // Navigate back to FirstPage with state
      >
        <i className="fa-solid fa-circle-arrow-left"></i> Back
      </button>

      {/* Socials */}
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
      {/* Socials */}

      <section className="text-gray-600 body-font p-20 py-22">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-black"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                MY PROJECTS
              </h1>
              <p className="bg-gray-200/50 p-5  rounded-lg sm:w-3/5 leading-relaxed text-black">
                  {myprojectsdes.projectmyDes}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {projects
              .slice() // Create a copy of the array
              .reverse() // Reverse the array
              .map((project) => {
                return (
                  <div
                    className="p-4 md:w-1/3 sm:mb-0 mb-6 "
                    key={project._id}
                    data-aos="zoom-in"
                  >
                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                      {project.projectTitle}
                    </h2>
                    <Link
                      className="text-indigo-500 inline-flex items-center mt-3"
                      to={`/projectsDetail/${project._id}`}
                    >
                      <div className="rounded-lg h-64 overflow-hidden">
                        <img
                          alt="content"
                          className="object-cover object-center h-full w-full  hover-opacity"
                          src={project.projectImg}
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        <div className=" h-64 w-full overflow-hidden  flex flex-col sm:flex-row items-center justify-center ">
          <div className="w-5/6 h-full bg-gray-300/60 flex flex-col sm:flex-row items-center justify-center rounded">
             <p className="text-2xl mr-2 p-5 ">
            More Projects Coming Soon....
          </p>
          <img
            src="../../css/img/loading.gif"
            className="object-contain h-1/3 sm:h-1/2"
          />
          </div>
         
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectPage;
