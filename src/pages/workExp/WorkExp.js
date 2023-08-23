import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date=" Dec 2022 - March 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developerat as Intern 
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               Techpile Technology (p) Ltd.
              </h4>
              <p>
              I was a Frontend Developer at Techpile Technology (p) Ltd.<br/> Lucknow Uttar Pradesh
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date=" March 2023 - Jul 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Mern Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               Seek Solution (p) Ltd.
              </h4>
              <p>
              I was a Mern Stack Developer at Seek Solution (p) Ltd. <br/> Lucknow Uttar Pradesh
              </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Augst 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
               Web-Developer as a Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                BhartIQ
              </h4>
              <p>
              I was a Frontend Developer at  BhartIQ on 4 week vertual internship .<br/> RAE BARELI, Uttar Pradesh
              </p>
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
