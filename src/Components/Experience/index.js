import React from "react";
import "../../App";
import "./experience.css";
import AnchorPic from "./ExpMedia/anchor.png";
import SkdkPic from "./ExpMedia/skdk.png";
const EXPERIENCES_LIST = [
  {
    company: "Anchor Technologies",
    position: "Full Stack Developer",
    keyPoints: [
      "Exceeded client’s expectations and met deadline for beta after starting project from scratch with a team of five engineers; served as connection between front and back, and managed data storage using Apollo/GraphQL in React.",
      "Consistently met product design requirements within scheduled deadlines while adhering to Agile development methods.",
      "Designed clean and reusable React Components, allowing for reuse, consistency, and efficiency across site",
    ],
    overview:
      "Produced interactive dashboard of a user’s cybersecurity posture; offered ongoing risk management and remediation planning. Leveraged GraphQL and Apollo to fetch/update customer data, which were displayed across interactive D3 models.",
    logo: "",
    start: "4/20",
    end: "11/20",
    image: AnchorPic,
  },
  {
    company: "SKDKnickerbocker",
    position: "Political and Public Relations",
    keyPoints: [
      "Produced and assisted with creating various forms of content including advisories, press releases, op-eds, and pitches.",
      "Client team experience includes Fortune 100 companies, philanthropic organizations, and political candidates (VP Joe Biden, Under Armour, Lyft)",
    ],
    overview:
      "Produced interactive dashboard of a user’s cybersecurity posture; offered ongoing risk management and remediation planning. Leveraged GraphQL and Apollo to fetch/update customer data, which were displayed across interactive D3 models.",
    logo: "",
    start: "1/19",
    end: "6/19",
    image: SkdkPic,
  },
];
const Experience = () => {
  return (
    <div className="experience section-header">
      <h1>Experience</h1>
      <div className="experiencesHolder">
        {EXPERIENCES_LIST.map((exp) => (
          <div className="singleExperience">
            <img src={exp.image} className="expImage" />
            <div>
              {" "}
              <p style={{ fontSize: "2rem" }}>{exp.company}</p>
              <p style={{ fontSize: "1.5rem" }}>
                {exp.position} --- {exp.start} - {exp.end}
              </p>
              <p style={{ fontSize: "1rem" }}>{exp.overview}</p>
              <ul>
                {exp.keyPoints.map((point) => (
                  <li style={{ fontSize: ".8rem" }}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
