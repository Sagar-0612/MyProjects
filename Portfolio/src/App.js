import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Bot from "./components/Bot";
import Githubstats from "./components/Githubstats";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Home />
      <About />
      <Skills />
      <Hireme />
      <Projects />
      <Githubstats />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;