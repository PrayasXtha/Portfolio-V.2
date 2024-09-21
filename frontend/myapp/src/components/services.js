import React from 'react';
import { useSelector } from 'react-redux';

const Services = () => {
  const { portfolioData } = useSelector((state) => state.root) || {};
  const { services } = portfolioData || {}; // Optional chaining to prevent errors if services is undefined

  return (
    <section id="Third_Page">
      <div id="content_third">
        <div className="flex flex-wrap -m-2">
          {services && services.map((service, i) => ( // 'i' is the index in the map
            <div className="xl:w-1/4 md:w-1/2 p-4" key={service._id}> {/* Add a unique key prop */}
              <div className="bg-gray-100 p-6 rounded-lg" 
                   data-aos="fade-right"
                   data-aos-offset="300"
                   data-aos-easing="ease-in-sine"
                   data-aos-duration={`${200 * (i + 1)}`}> {/* Dynamic AOS duration */}
                <img className="h-40 rounded w-full object-contain object-center mb-6" 
                     src={service.serviceImg} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {service.serviceTitles}
                </h2>
                <p className="leading-relaxed text-base">{service.serviceDes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
