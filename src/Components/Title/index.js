import React, { useEffect, useState } from "react";
import "../../App";

const Title = () => {
  let topics = [
    "JavaScript",
    "Node.js",
    "React",
    "HTML",
    "AWS",
    "Redux",
    "React Native",
    "TypeScript",
  ];
  let [index, setIndex] = useState(0);
  let [topic, setTopic] = useState(topics[index]);

  useEffect(() => {
    if (index + 1 === topics.length) {
      setIndex(0);
      index = 0;
    } else {
      setIndex(index + 1);
      index += 1;
    }

    const timer = setTimeout(() => {
      setTopic(topics[index]);
    }, 4000);
    return () => clearTimeout(timer);
  }, [topic]);
  return (
    <div className="mainTitle section-header">
      <div id="myName">Matthew Brown</div>
      <p class="gradient-text" id="nameSubText">
        Let's talk about {topic}
      </p>
    </div>
  );
};

export default Title;
