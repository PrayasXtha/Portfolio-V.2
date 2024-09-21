import React from "react";
import { useSelector } from "react-redux";

const Skills = () => {
  const { portfolioData } = useSelector((state) => state.root) || {};
  const { skills, langexperiences } = portfolioData || {}; // Use optional chaining to prevent errors if skills is undefined

  return (
    <section id="Fourth_Page">
      <div id="Right_Content">
        <div id="contentManager4">
          <section
            className="text-gray-600 body-font px-20"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              {skills &&
                skills.map((skill) => ( // Ensure skills is defined before mapping
                  <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto" key={skill._id}> {/* Add a key prop */}
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-900 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-500 text-white relative z-10 title-font font-medium text-sm"></div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div
                        className="flex-shrink-0 w-24 h-24 bg-gray-500 text-gray-100 rounded-full inline-flex items-center justify-center"
                        data-aos="zoom-out"
                      >
                        <h1 className="text-4xl">
                          <i className="fa-solid fa-user-group"></i>
                        </h1>
                      </div>
                      <div
                        className="flex-grow sm:pl-6 mt-6 sm:mt-0"
                        data-aos="fade-right"
                      >
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                          {skill.experienceTitles}
                        </h2>
                        <span className="text-sm">{skill.experiencePeriod}</span>
                        <p className="leading-relaxed">{skill.experienceAbout}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
          <div id="fourth_RC" data-aos="fade-up" data-aos-duration="2000">
            <div id="exp_title">
              <p className="text-center">
               {langexperiences.langDes} 
              </p>

              <h2 className="text-center">{langexperiences.langTitle}</h2>
            </div>

            <div className="grid-container">
  {langexperiences.langImg.map((img, index) => (
    <div className="grid-item" key={img._id} data-aos="zoom-in" data-aos-duration="2000">
      <img src={img}  />
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
