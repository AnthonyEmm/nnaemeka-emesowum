import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGithub,
  faGitAlt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated-slideInLeft");
        }
      },
      { threshold: 0.1 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div
        ref={aboutRef}
        className="flex flex-col items-center justify-center min-h-screen text-center p-6"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-xl mb-6 md:mb-10 font-bold text-white mt-16 underline-effect">
          About Me❤️
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-16">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center gap-8">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                alt="Redux"
                className="icon-custom"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                alt="MongoDB"
                className="icon-custom"
              />

              <FontAwesomeIcon
                icon={faJsSquare}
                size="4x"
                className="text-yellow-500 animate-bounce"
              />
              <FontAwesomeIcon
                icon={faReact}
                size="4x"
                className="text-blue-400 animate-bounce"
              />
              <FontAwesomeIcon
                icon={faHtml5}
                size="4x"
                className="text-orange-600 animate-bounce"
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                size="4x"
                className="text-blue-600 animate-bounce"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-5">
              <FontAwesomeIcon
                icon={faNodeJs}
                size="4x"
                className="text-green-500 animate-bounce"
              />
              <FontAwesomeIcon
                icon={faGitAlt}
                size="4x"
                className="text-red-500 animate-bounce"
              />
              <FontAwesomeIcon
                icon={faGithub}
                size="4x"
                className="text-white animate-bounce"
              />
              <FontAwesomeIcon
                icon={faBootstrap}
                size="4x"
                className="text-purple-600 animate-bounce"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
                alt="Mongoose"
                className="icon-custom"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                alt="Express.js"
                className="icon-custom"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                alt="Tailwind CSS"
                className="icon-custom"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-4 md:px-0">
            <h2 className="text-lg sm:text-2xl md:text-2xl max-w-xl font-extrabold text-white text-justify mb-4">
              I am a passionate software developer with an enthusiasm for
              building efficient and innovative solutions. 🖥️Proficient in
              HTML5, CSS3, JavaScript, ReactJS, MongoDB, ExpressJS, PostgreSQL,
              NodeJS, Git, Github and others. 📱I thrive on learning new complex
              concepts that transform into user-friendly applications. 🌍By
              having a growth mindset, I strive to stay updated on the latest
              tech industry trends to deliver cutting-edge solutions that
              satisfy user experiences.🕊️
            </h2>
            <Link
              to="https://drive.google.com/file/d/1C_VlPHglWte28SI9gD-BMDy-i-ggMJhd/view?usp=sharing"
              target="_blank"
            >
              <button
                className="flex flex-col items-center justify-center bg-gray-800 px-8 py-5
                     text-white hover:text-black font-bold text-2xl rounded-full hover:bg-gray-200"
              >
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
