import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/vidya dhar Resume from Linkedin .pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {FaWhatsappSquare} from "react-icons/fa";
import{GiCloudDownload} from "react-icons/gi";
import Fade from "react-reveal/Fade";
import "./Home.css"


const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} style={{color:"white"}} />
          ) : (
            <BsFillSunFill size={30} style={{color:"white"}} />
          )}
        </div>
      
        <div className="container home-content">
       
          <h5 className="welcome-web">
          
            <Typewriter
              options={{
                strings: [
                  "Your Welcome 🙌 My Portfolio Web-App! 🕸️"
                ],
                autoStart: true,
                   
              }}
            />

          </h5>
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h3>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer !",
                    "Mern Stack Developer !",
                    "React Js developer !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </Fade>

          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9076944738" // here is my whatsapp 
                rel="noreferrer"
                target="_blank"
                title="Click & Go Your WhatsApp !"
              >
                Whatsapp <FaWhatsappSquare style={{height:"25px",width:"25px"}}/>
              </a>
              <a className="btn btn-cv" href={Resume} alert="download" download="vidya dhar Resume from Linkedin .pdf" title="Click to download !">
                My Resume<GiCloudDownload style={{height:"25px",width:"25px"}}/>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
