import React from "react";
import "../../App";
import "./skills.css";

const FRONT_END_SKILLS = [
  {
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
  },
  { name: "TypeScript", image: "" },
  { name: "React", image: "" },
  { name: "Redux", image: "" },
  { name: "React Native", image: "" },
  { name: "Vue", image: "" },
  { name: "HTML", image: "" },
  { name: "CSS", image: "" },
  { name: "SASS", image: "" },
];

const BACK_END_SKILLS = [
  { name: "Node.js", image: " " },
  { name: "Python", image: " " },
  { name: "Java", image: " " },
  { name: "GraphQL", image: " " },
  { name: "Apollo", image: " " },
  { name: "AWS", image: " " },
  { name: "MongoDB", image: " " },
  { name: "SQL", image: " " },
  { name: "Git/Github", image: " " },
  { name: "Docker", image: " " },
  { name: "Kubernetes", image: " " },
];

const Skills = () => {
  return (
    <div className="skills section-header">
      <h1>Skills</h1>
      <div className="skillsHolder">
        <h5>Front-End</h5>
        <div className="feBeContainer">
          {" "}
          {FRONT_END_SKILLS.map((skill) => (
            <div>{skill.name}</div>
          ))}
        </div>
        <h5>Back-End</h5>
        <div className="feBeContainer">
          {" "}
          {BACK_END_SKILLS.map((skill) => (
            <>
              {/* <image
                src={`url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png")`}
                alt="JS"
                className="skillImage"
              /> */}
              <div>{skill.name}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
