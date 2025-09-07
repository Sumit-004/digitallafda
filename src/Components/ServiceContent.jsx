import React, { useState } from "react";
import meta from "../assets/metaAd.jpg";
import google from "../assets/googleAd.png";
import taboola from "../assets/taboolaAd.jpg";
import webdev from "../assets/websitedev.jpg";
import socialmedia from "../assets/socialmedia.webp";
import graphics from "../assets/graphics.webp";
import video from "../assets/video.webp";
import seo from "../assets/SEO.webp";
import bg from "../assets/HomePage-Service-bg.jpg"

const ServiceContent = () => {
  const Services = [
    {
      id: 1,
      title: "META ADS",
      image: meta,
      description:
        "Run targeted Facebook and Instagram ads to maximize reach and conversions.",
    },
    {
      id: 2,
      title: "GOOGLE ADS",
      image: google,
      description:
        "Get instant visibility on Google with optimized search and display campaigns.",
    },
    {
      id: 3,
      title: "TABOOLA ADS",
      image: taboola,
      description:
        "Boost traffic with native advertising and smart content placements.",
    },
    {
      id: 4,
      title: "WEBSITE DEVELOPMENT",
      image: webdev,
      description:
        "Build responsive, modern websites tailored to your brand and business goals.",
    },
    {
      id: 5,
      title: "SOCIAL MEDIA MANAGEMENT",
      image: socialmedia,
      description:
        "Grow your online presence with engaging posts and account management.",
    },
    {
      id: 6,
      title: "GRAPHIC DESIGN",
      image: graphics,
      description: "Eye-catching graphics, logos, and creatives designed for impact.",
    },
    {
      id: 7,
      title: "VIDEO EDITING",
      image: video,
      description: "High-quality video editing to tell your brand story effectively.",
    },
    {
      id: 8,
      title: "SEO SERVICES",
      image: seo,
      description:
        "Improve rankings and organic traffic with advanced SEO strategies.",
    },
  ];

  const [activeService, setActiveService] = useState(Services[0]);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Left side menu */}
      <div
        className="relative md:w-1/2 w-full h-[60vh] md:h-auto flex flex-col justify-center items-center text-white bg-cover bg-center transition-all duration-500"
        // style={{ backgroundImage: `url(${activeService.image})` }}
        style={{backgroundImage: `url(${bg})`}}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content on top */}
        <ul className="relative -top-7 md:top-0 z-10 flex flex-col gap-3 md:gap-4 max-h-[60%] md:max-h-none">
          {Services.map((service) => (
            <li
              key={service.id}
              onClick={() => setActiveService(service)}
              className="cursor-pointer"
            >
              <h1
                className={`text-lg md:text-3xl font-bold text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white] transition-all duration-300 
                ${
                  activeService.id === service.id
                    ? "text-white"
                    : "hover:scale-105"
                }`}
              >
                {service.title}
              </h1>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side preview */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center text-black p-4 md:p-6">
        <div className="w-full flex flex-col justify-center items-center p-4 md:p-6 rounded-2xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {activeService.title}
          </h2>
          <div className="flex justify-center w-full max-w-[480px] mb-4">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="object-cover rounded-lg w-full h-48 md:h-85"
            />
          </div>
          <p className="text-sm md:text-lg">{activeService.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
