import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFontawesome,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiLeaflet,
  SiExpress,
  SiHeadlessui,
  SiTypescript,
  SiVercel,
  SiStyledcomponents,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import ProjectImage1 from "../assets/xrental-new.png";
import ProjectImage2 from "../assets/Blog5.png";
import ProjectImage3 from "../assets/Kedu_New.png";
import ProjectImage4 from "../assets/Delux_Rental_WP.png";
import ProjectImage5 from "../assets/new-logo_movix.png";
import ProjectImage6 from "../assets/my-todo.png";

const technologyIcons = {
  ReactJS: <FaReact />,
  Html: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <FaJs />,
  MongoDB: <SiMongodb />,
  NodeJS: <FaNodeJs />,
  Bootstrap: <FaBootstrap />,
  "Font Awesome": <SiFontawesome />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  TailwindCSS: <SiTailwindcss />,
  Firebase: <SiFirebase />,
  Redux: <SiRedux />,
  Leaflet: <SiLeaflet />,
  Express: <SiExpress />,
  TypeScript: <SiTypescript />,
  "Headless UI": <SiHeadlessui />,
  Vercel: <SiVercel />,
  API: <TbApi />,
  "Styled Component": <SiStyledcomponents />,
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "X RENTAL",
      description:
        "An app that helps tenants find apartment directly with owners. A WBS CODING SCHOOL, Berlin final project",
      image: ProjectImage1,
      url: "https://xrental.onrender.com/",
      technologies: [
        "ReactJS",
        "Html",
        "CSS3",
        "JavaScript",
        "MongoDB",
        "NodeJS",
        "Bootstrap",
        "Font Awesome",
        "Express",
        "Leaflet",
        "Git",
        "GitHub",
      ],
    },
    {
      id: 2,
      title: "DELUXRENTAL",
      description: "DeluxRental is a luxury car rental service application.",
      image: ProjectImage4,
      url: "https://deluxrental.vercel.app/",
      technologies: ["ReactJS", "TailwindCSS", "Vercel", "Git", "GitHub"],
    },
    {
      id: 3,
      title: "KEDU! RECIPES",
      description: "©KEDU! Recipes showcases a variety of Nigerian cooking",
      image: ProjectImage3,
      url: "https://kedu-recipes.vercel.app/",
      technologies: ["ReactJS", "CSS3", "TailwindCSS", "Git", "GitHub"],
    },
    {
      id: 4,
      title: "BLOGGER5IVE",
      description: "A blog app to share your amazing articles",
      image: ProjectImage2,
      url: "https://blogger-5ive.onrender.com/",
      technologies: [
        "ReactJS",
        "Html",
        "CSS3",
        "JavaScript",
        "NodeJS",
        "Font Awesome",
        "Express",
        "TailwindCSS",
        "Firebase",
        "Redux",
        "Git",
        "GitHub",
      ],
    },
    {
      id: 5,
      title: "MOVIX TRAIL",
      description: "Search and watch your favorite movie trailers",
      image: ProjectImage5,
      url: "https://movix-trail.vercel.app/",
      technologies: ["ReactJS", "API", "CSS3", "Git", "GitHub"],
    },
    {
      id: 6,
      title: "TaskMgt",
      description: "Todo list (Desktop/Mobile)",
      image: ProjectImage6,
      url: "https://anthonyemm.github.io/task-mgt/",
      technologies: ["Html", "CSS3", "JavaScript", "Git", "GitHub"],
    },
  ];

  const [showDescription, setShowDescription] = useState(null);

  const toggleDescription = (projectId) => {
    if (showDescription === projectId) {
      setShowDescription(null);
    } else {
      setShowDescription(projectId);
    }
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".project-card")) {
      setShowDescription(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container flex flex-col items-center justify-center mx-auto mt-8 px-4 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-xl mb-6 md:mb-10 font-bold text-white mt-28 underline-effect">
          👨🏿‍💻 Projects & Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              showDescription={showDescription}
              toggleDescription={toggleDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, showDescription, toggleDescription }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={` rounded-lg shadow-2xl p-6 flex flex-col items-center transition-all duration-700 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:scale-105 hover:shadow-lg project-card`}
      style={{ maxWidth: "550px" }}
    >
      <Link
        to={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <h3 className="text-xl mb-2 text-white text-center font-bold">
          {project.title}
        </h3>
        <div className="relative mb-2 w-full">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg object-cover transition-opacity duration-500 ease-in-out hover:opacity-50"
              style={{ maxHeight: "250px" }}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className="bg-gray-800 text-white text-xl font-bold py-2 px-4 rounded-full">
              Live Preview
            </span>
          </div>
        </div>
      </Link>
      <div className="mb-2 mt-4">
        <button
          onClick={() => toggleDescription(project.id)}
          className="bg-gray-200 hover:bg-gray-800 text-gray-800 hover:text-white 
          font-bold py-2 px-4 rounded-full inline-flex items-center text-lg"
        >
          {showDescription === project.id
            ? "Hide Description"
            : "Show Description"}
        </button>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          showDescription === project.id ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-gray-800 text-center font-bold text-xl">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-4">
        {project.technologies.map((tech) => (
          <div key={tech} className="flex items-center m-1">
            <span className="text-3xl text-white mr-2">
              {technologyIcons[tech]}
            </span>
            <span className="text-white text-md">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
