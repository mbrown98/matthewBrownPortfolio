import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";

import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Experience />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
