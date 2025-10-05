import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";
import Services from "./components/Services";
import TechnewsCarousel from "./components/TechnewsCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          {/* Scroll to top button */}
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 bg-gray-800 text-white p-2 border rounded-full
              shadow-lg hover:bg-gray-700 transition"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <FontAwesomeIcon icon={faArrowUp} size="lg" />
            </button>
          )}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
