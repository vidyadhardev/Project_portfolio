import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import {
    FcAbout,
    FcBusinessContact,
    FcHome,
    FcPortraitMode,
    FcReadingEbook,
    FcVideoProjector,
} from "react-icons/fc";
import { GiTechnoHeart } from 'react-icons/gi'
const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <Zoom>
                        <div className="navbar-profile-pic">
                            <img
                                src=" /images/VidyaDhar1.jpg"
                                alt="profile pic chnage"
                            />
                        </div>
                    </Zoom>
                    <Fade left>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcHome />
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="techstack"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <GiTechnoHeart />
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="education"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcReadingEbook />
                                        Education
                                    </Link>
                                </div>



                                <div className="nav-link">
                                    <Link
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcVideoProjector />
                                        Projects
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="work"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcPortraitMode />
                                        Work Experince
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcAbout />
                                        About Me
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcBusinessContact />
                                        Contact Us
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </Fade>
                </>
            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcHome style={{ height: '30px', width: '30px' }} />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="techstack"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <GiTechnoHeart style={{ height: '30px', width: '30px' }} />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcReadingEbook style={{ height: '30px', width: '30px' }} />
                                </Link>
                            </div>



                            <div className="nav-link">
                                <Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcVideoProjector style={{ height: '30px', width: '30px' }} />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="work"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcPortraitMode style={{ height: '30px', width: '30px' }} />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcAbout style={{ height: '30px', width: '30px' }} />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcBusinessContact style={{ height: '30px', width: '30px' }} />
                                </Link>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Menus;
