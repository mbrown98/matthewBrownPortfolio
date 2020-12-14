import React from "react";
import MarylandPic from "./EduMedia/maryland.png";
import HR from "./EduMedia/hr.png";
import "./education.css";

const Education = () => {
  return (
    <div className="education section-header">
      <h1>Education</h1>
      <div className="educationHolder">
        <div className="singleEducation">
          <img src={MarylandPic} className="eduImage" />
          <div>
            {" "}
            <p style={{ fontSize: "2rem" }}>
              University of Maryland -- College Park
            </p>
            <p style={{ fontSize: "1.5rem" }}>
              Political Science B.A. and Economics B.A.
            </p>
          </div>
        </div>
      </div>
      <div className="educationHolder">
        <div className="singleEducation">
          <img src={HR} className="eduImage" />
          <div>
            {" "}
            <p style={{ fontSize: "2rem" }}>Hack Reactor -- New York City</p>
            <p style={{ fontSize: "1.5rem" }}>
              Software Engineering Immersive Program
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
