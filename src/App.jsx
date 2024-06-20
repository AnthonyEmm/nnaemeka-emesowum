import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";
import Services from "./components/Services";
import TechnewsCarousel from "./components/TechnewsCarousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <div>
          <Hero />
          <About />
          <Projects />
          <Services />
          <TechnewsCarousel />
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
