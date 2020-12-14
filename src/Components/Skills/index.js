import React from "react";
import "../../App";
import "./skills.css";

import ts from "./FrontEnd/ts.png";
import js from "./FrontEnd/js.png";
import re from "./FrontEnd/react.png";

import mongo from "./BackEnd/mongo.png";
const FRONT_END_SKILLS = [
  {
    name: "JavaScript",
    image: js,
  },
  { name: "TypeScript", image: ts },
  { name: "React", image: re },
  { name: "Redux", image: "" },
  { name: "React Native", image: "" },
  { name: "Vue", image: "" },
  { name: "HTML", image: "" },
  { name: "CSS", image: "" },
  { name: "SASS", image: "" },
];

const BACK_END_SKILLS = [
  { name: "Node.js", image: "" },
  { name: "Python", image: " " },
  { name: "Java", image: " " },
  { name: "GraphQL", image: " " },
  { name: "Apollo", image: " " },
  { name: "AWS", image: " " },
  { name: "MongoDB", image: mongo },
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
            <div className="singleSkill">
              <img src={skill.image} />
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
        <h5>Back-End</h5>
        <div className="feBeContainer">
          {" "}
          {BACK_END_SKILLS.map((skill) => (
            <div className="singleSkill">
              <div
                style={{
                  backgroundImage: `url(${skill.image})`,
                  height: "50px",
                  width: "50px",
                }}
              ></div>

              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
