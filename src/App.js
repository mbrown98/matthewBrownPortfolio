import React, { useEffect, useState } from "react";

import "./App.css";
import MainTitle from "./Components/Title";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";

function App() {
  return (
    <div className="App">
      <div class="navBar">NavBar</div>
      <MainTitle />
      <About />

      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
