import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TechnewsCarousel.css"; // Import additional CSS if needed

// Import images from assets folder
import tldrTechImage from "../assets/tdlr.png";
import theNextWebImage from "../assets/rsz_next-web-logo.png";
import theVergeImage from "../assets/rsz_the_verge.png";
import wiredImage from "../assets/rsz_wired.png";
import techCrunchImage from "../assets/rsz_techcrunch.png";
import arsTechnicaImage from "../assets/rsz_ars-technica.png";

const TechnewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    adaptiveHeight: true,
  };

  const techWebsites = [
    {
      url: "https://tldr.tech/",
      img: tldrTechImage,
    },
    {
      url: "https://thenextweb.com",
      img: theNextWebImage,
    },
    {
      url: "https://www.theverge.com/tech",
      img: theVergeImage,
    },
    {
      url: "https://wired.com",
      img: wiredImage,
    },
    {
      url: "https://techcrunch.com",
      img: techCrunchImage,
    },
    {
      url: "https://arstechnica.com",
      img: arsTechnicaImage,
    },
  ];

  return (
    <section
      id="technews"
      className="technews min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-white mb-20">
          <span className="underline-effect">My Daily Digest📰</span>
        </h2>

        <div className="mx-auto max-w-screen-lg">
          <Slider {...settings}>
            {techWebsites.map((site, index) => (
              <div key={index} className="px-2">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={site.img}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto mx-auto"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TechnewsCarousel;
