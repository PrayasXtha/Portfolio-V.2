import React, { useEffect } from 'react';
import "./firstpage_css.css";

const Socials = () => {
  useEffect(() => {
    const handleScroll = () => {
      const social = document.getElementById('social');
      if (window.scrollY > 100) { // Adjust this value as needed based on your page structure
        social.classList.add('scrolled');
      } else {
        social.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="social">
        <a id='socials_fb' className="social_links" href="https://www.youtube.com/@prayasinca162" target="_blank" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1500" data-aos-easing="ease-in-out">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a id='socials_insta' className="social_links" href="https://www.instagram.com/iam_prayas/" target="_blank" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="index.html">
          <img src="../../css/img/prayassocials.jpg" alt="" id="pp" />
        </a>
        <a id='socials_git' className="social_links" href="https://github.com/PrayasXtha" target="_blank" data-aos="fade-down" data-aos-delay="150" data-aos-duration="1500" data-aos-easing="ease-in-out">
          <i className="fa-brands fa-github"></i>
        </a>
        <a id='socials_linkedin' className="social_links" href="https://www.linkedin.com/in/prayas-shrestha-702a4223b/" target="_blank" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-in-out">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
