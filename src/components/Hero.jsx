import React from "react";
import photo from "../assets/nnaemeka.png";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="home">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen items-center justify-center text-center p-16">
        <div className="flex flex-col items-center justify-center fade-in">
          <h1 className="text-4xl md:text-7xl sm:8xl mb-1 md:mb-3 font-bold text-center items-center fade-in mt-10 text-gray-800">
            👋🏿Hi, I'm Nnaemeka
          </h1>
          <p className="text-lg md:text-5xl mb-3 mt-4 font-extrabold text-white fade-in">
            WEB <strong className="text-white">DEVELOPER</strong>
          </p>
          <div className="flex space-x-4">
            <Link
              to="https://www.linkedin.com/in/nnaemeka-emesowum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-12 h-20"
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
                className="w-12 h-20"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center fade-in">
          <img
            src={photo}
            alt="my profile picture"
            className="w-50 h-50 rounded-full mt-4 mb-6 overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
