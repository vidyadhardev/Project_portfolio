import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="/images/Vidya4.jpg"
                alt="About_Image"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hello! I'm a passionate Full Stack Web Developer with expertise in <b>ReactJS, Node.js, Express.js, MongoDB, git, and GitHub</b>.
                I strive to create modern and robust web applications that deliver an exceptional user experience.
                With a strong focus on clean and modular code, I've successfully completed various projects, including e-commerce websites,
                blog applications, and real-time chat apps. My proficiency in React allows me to build dynamic and responsive user interfaces
                while ensuring effective state management with Redux. On the server-side, I excel in Node.js and Express.js, developing APIs for seamless client-server communication.
                MongoDB is my go-to choice for efficient database management. I value version control using Git and leverage GitHub for smooth collaboration with teams.
                My portfolio showcases my projects and highlights my commitment to continuous improvement. I never shy away from challenges and always strive to become a better developer.
                Thank you for your time! Feel free to explore my portfolio to see my work in action.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
