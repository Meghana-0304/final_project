import React, { useEffect, useState } from "react";
import './aboutus.css'

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on mount
  }, []);

  return (
    <div className="about-us">
		
      <div className="image-container">
        <img
          src="./images/aboutus.png"
          alt="About Us"
          className={animate ? "image-slide" : ""}
        />
      </div>
	  <div className="about-text-left">
      <h1>Welcome to OOPORTUNE </h1>
      <h5>– where opportunity meets fortune.</h5>
		  <h3>We are dedicated to making career growth simpler and more accessible. OOPORTUNE is a one-stop platform for finding jobs, internships, and skill-building workshops. Designed for students, job seekers, and professionals, our portal connects you with opportunities tailored to your goals.</h3>
	  </div>
    <div className="about-text-right">
      <div id="card-1">
        <h3>Find everything in one place.</h3>
        <h5>Our platform connects you with job opportunities, internships, and workshops from various industries and educational institutions. Say goodbye to scattered job searches and hello to a streamlined experience tailored to your goals.</h5>
      </div>
      <div id="card-2">
      <h3>Learn and grow with ease.</h3>
      <h5>Access workshops, webinars, and training sessions hosted by colleges and organizations to boost your skills and stay industry-ready. Take charge of your career development with opportunities designed to help you thrive.</h5>
      </div>
      <div id="card-3">
        <h3>Personalized support at your fingertips.</h3>
        <h5>Navigate your career journey effortlessly with our integrated machine-learning-powered chatbot. From answering questions to offering career guidance, our chatbot is here to make your experience engaging and supportive.</h5>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;