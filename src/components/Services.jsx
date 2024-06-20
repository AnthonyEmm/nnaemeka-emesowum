import React, { useEffect } from "react";
import { RiComputerLine } from "react-icons/ri";
import { FaMobileScreenButton } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, // false to animate on every scroll
      offset: 400, // Triggers animation when the element is 400px from the viewport
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const serviceElements = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    });

    serviceElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      serviceElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="services" className="services text-white py-28">
      <div className="container mx-auto text-center mt-20 mb-28">
        <h2
          className="text-4xl md:text-7xl font-bold mb-12 underline-effect"
          data-aos="fade-up"
        >
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-sm" data-aos="fade-up">
            <div className="flex items-center justify-center text-4xl md:text-6xl text-blue-500">
              <RiComputerLine />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-4 underline-effect cursor-pointer">
              Web Development
            </h3>
            <p className="text-xl md:text-lg">
              I craft innovative web solutions, and build responsive,
              user-friendly websites that drive engagement and maximize online
              presence. Partner with me for a reliable, innovative, and
              results-driven web development experience.
            </p>
          </div>
          <div className="text-sm" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center justify-center text-4xl md:text-6xl text-green-500">
              <FaMobileScreenButton />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-4 underline-effect cursor-pointer">
              Mobile Development
            </h3>
            <p className="text-xl md:text-lg">
              With a focus on innovation, security, and scalability, I deliver
              custom mobile apps that enhance engagement and drive growth.
              Partner with me for a reliable, cutting-edge app development
              service that turns your vision into reality.
            </p>
          </div>
          <div className="text-sm" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center justify-center text-4xl md:text-6xl text-purple-500">
              <SiAffinitydesigner />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-4 underline-effect cursor-pointer">
              Web Design & SEO
            </h3>
            <p className="text-xl md:text-lg">
              I create user-friendly websites that reflect your brand and engage
              your audience. Prioritizing responsive design, ensuring a seamless
              experience across all devices. I optimize your site for search
              engines, and driving traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
