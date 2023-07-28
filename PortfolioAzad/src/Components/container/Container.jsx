import React from "react";
import TextArea from "./TextArea/TextArea";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import About from "./My-About/About";
import "../container/Container.scss";
import Contact from "./Contactme/Contact";

const Container = () => {

  return (
    <div className="container">
      <div className="main">
        <TextArea />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Container;
