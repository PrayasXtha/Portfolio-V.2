import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Projects = () => {
  // Dynamic data
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;




  return (
    <section id="Second_Page">
      <div id="Right_Content">
        <div id="second_RC" data-aos="fade-up" data-aos-duration="2000">
          {projects
            .slice()
            .reverse()
            .slice(0, 1)
            .map((project) => (
              <section className="text-gray-600 body-font" key={project._id}>
                <span className="p-5 text-gray-800 font-bold">
                  LATEST PROJECT <i className="fa-solid fa-fire text-red-600"></i>
                </span>
                <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src={project.projectImg}
                    />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      {project.projectTitle}
                    </h1>
                    <p className="mb-8 leading-relaxed text-gay-900">{project.projectDes}</p>
                    <div className="flex justify-center">
                      <a href={project.projectDemoLink} target="blank">
                        <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                          Demo
                        </button>
                      </a>
                      <a href={project.projectGitLink} target="blank">
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          {/* Link to the full projects page */}
          <Link
            className="text-gray-600 inline-flex items-center mt-3 hover:text-black"
            to="/projects" // No state is passed to prevent auto-scroll
          >
            <b>
              <ul>Check out My Other Projects</ul>
            </b>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
