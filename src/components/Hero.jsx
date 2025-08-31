import React from "react";
import photo from "../assets/nnaemeka.png";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="home">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center text-center p-6 sm:p-10 md:p-16">
        <div className="flex flex-col items-center justify-center fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-1 md:mb-3 font-bold text-center items-center fade-in mt-10 text-gray-800">
            👋🏿Hi, I'm Nnaemeka
          </h1>
          <p className="text-lg sm:text-2xl md:text-5xl mb-3 mt-4 font-extrabold text-white fade-in">
            FULL STACK <strong className="text-white">DEVELOPER</strong>
          </p>
          <div className="flex flex-row flex-wrap justify-center gap-4 mt-2">
            <Link
              to="https://www.linkedin.com/in/nnaemeka-emesowum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
              />
            </Link>
            <Link
              to="https://github.com/AnthonyEmm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center fade-in">
          <img
            src={photo}
            alt="my profile picture"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full mt-4 mb-6 overflow-hidden object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
