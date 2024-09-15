import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "./footer";
import { projectsTemp } from "../resource/projectsTemp";

function ProjectDetails() {

  const { id } = useParams();  // Get the project ID from the URL
  const project = projectsTemp.find((project) => project._id === id);  // Find the project by ID
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/projects");  // Navigate back to projects page
  };

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (

    <div id="projectPage">
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
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                {project.projectTitle}
              </h1>
              <p className="bg-gray-200/50 p-2 rounded-lg sm:w-3/5 leading-relaxed text-black sm: px-7 py-7   ">
              <h1 className="text-black-900 font-bold">DESCRIPTION</h1>
                {project.projectDes}
              </p>
            </div>
                <div className="flex">
                        <img src={project.projectImgMultiMedia}></img>

                  
                </div>
                <div className="flex items-center justify-center p-10"> 
                             <a href={project.projectDemoLink} target="blank"> <button className=" px-6 py-3 bg-black rounded text-white mr-5 hover-opacity">DEMO</button></a>
                              <span>OR</span>
                              <a href={project.projectGitLink} target="blank"><button className="  px-6 py-3  bg-black rounded text-white ml-5 hover-opacity">CODE</button></a>
                        </div>

          </div>
        </div>

      </section>
        <Footer />
    </div>
  );
}

export default ProjectDetails;
