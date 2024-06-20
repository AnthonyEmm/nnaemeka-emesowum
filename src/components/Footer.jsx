import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="mb-4 lg:mb-0">
          <p className="text-center text-white text-md font-semibold font-custom text-xl">
            &copy;{new Date().getFullYear()}{" "}
            <strong className="text-white">
              Nnaemeka C. Emesowum | All Rights reserved
            </strong>
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end space-x-4 mb-4 lg:mb-0 ">
          <Link
            smooth
            to="#about"
            className="text-gray-400 hover:text-red-500 transition duration-300 text-2xl font-extrabold"
          >
            About
          </Link>
          <Link
            smooth
            to="#projects"
            className="text-gray-400 hover:text-red-500 transition duration-300 text-2xl font-extrabold"
          >
            Projects
          </Link>
          <Link
            smooth
            to="#services"
            className="text-gray-400 hover:text-red-500 transition duration-300 text-2xl font-extrabold"
          >
            Services
          </Link>
          <Link
            smooth
            to="#technews"
            className="text-gray-400 hover:text-red-500 transition duration-300 text-2xl font-extrabold"
          >
            Tech News
          </Link>
        </div>
        <div className="flex justify-center lg:justify-end space-x-4">
          <Link
            to="https://www.linkedin.com/in/nnaemeka-emesowum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-10 h-10"
            />
          </Link>
          <Link
            to="https://github.com/AnthonyEmm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-10 h-10"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
