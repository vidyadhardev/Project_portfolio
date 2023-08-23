import { MdSchool } from "react-icons/md";
import { GrCertificate } from "react-icons/gr"
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h4 className="vertical-timeline-element-title mb-2">Dpiloma in Computer Science Engineering</h4>
            <h6 className="vertical-timeline-element-subtitle">
              Government Polytechnic Mohammadi Lakhimpur (Kheri)
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="March- 2018"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h4 className="vertical-timeline-element-title mb-2">Inertmediat(Xll)</h4>
            <h6 className="vertical-timeline-element-subtitle">
              K.A.U.K.H.S. School Padariya Tula Kheri
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="March- 2016"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h4 className="vertical-timeline-element-title mb-2">Highschol(X)</h4>
            <h6 className="vertical-timeline-element-subtitle">
              S.K. Inert College Gyanpur Kheri
            </h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>




      <div>
        <div className=" education" id="education">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Training & Experience Certificate
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="Aug-2022  Apr-2023"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrCertificate />}
            >
              <h4 className="vertical-timeline-element-title mb-2">Apprenticship </h4>
              <h6 className="vertical-timeline-element-subtitle">
                Techpile Technology (p) Ltd.
                <h6 className="mt-2"> Lucknow Uttar Pradesh</h6>
              </h6>
              <h6 className="core-technology"> My main Technique in this program is Mern Stack ,<br></br> Like as Mongo Database,Express js, React js, Node js .</h6>

            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="Sep-Oct 2021"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrCertificate />}
            >
              <h4 className="vertical-timeline-element-title mb-2">Summer Training </h4>
              <h6 className="vertical-timeline-element-subtitle">
                Techpile Technology (p) Ltd.
                <h6 className="mt-2"> Lucknow Uttar Pradesh</h6>
              </h6>
              <h6 className="core-technology"> My main Technique in this program is Android With Java !</h6>

            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date=" Jan-2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrCertificate />}
            >
              <h4 className="vertical-timeline-element-title"> Great Learning</h4>
              <h6 className="vertical-timeline-element-subtitle mt-2">
                Programming in HTML-5 with JavaScript and CSS-3
              </h6>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
