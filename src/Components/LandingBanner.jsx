import React, { useState } from "react";
import googleBanner from "../assets/google-banner.png";
import meta from "../assets/svg/meta-svg.svg";
import google from "../assets/svg/google-svg.svg";
import { motion } from "motion/react"

const LandingBanner = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative w-full md:h-[87vh] h-[52vh] flex items-center justify-center px-4 md:px-20 bg-[#1C352D] text-white md:mt-24 mt-22`}
      style={{
        background: hovered
          ? `url(${googleBanner}) center/cover no-repeat`
          : `#1C352D`,
      }}
    >
      {/* Main Heading */}
      <h1 className="text-center mx-2 md:mx-20 leading-snug">
        <span className="block text-2xl md:text-5xl">
          Your {" "}
          <span
            className={`font-bold px-1 text-2xl md:text-6xl transition-colors duration-300 ${hovered ? "text-black bg-amber-300" : ""
              }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Google,
          </span>
          <span className={`font-bold text-2xl md:text-6xl ${hovered ? 'text-transparent' : ''}`}> Meta,</span>
        </span>
        <span className={`block text-2xl md:text-6xl font-bold mt-1 ${hovered ? 'text-transparent' : ''}`}>
          and Taboola Ads experts —
        </span>
        <span className={`block text-lg md:text-4xl mt-2 ${hovered ? 'text-transparent' : ''}`}>
          smart enough to know better, bold enough to think bigger!
        </span>
      </h1>

      {/* Floating SVGs */}
      <motion.img
        src={meta}
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-16 md:w-40 absolute top-8 md:top-28 right-4 md:right-20 rotate-12 md:rotate-45"
        alt="meta"
      />
      <motion.img
        src={google}
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-16 md:w-40 absolute bottom-8 md:bottom-28 left-4 md:left-20 -rotate-12 md:-rotate-20"
        alt="google"
      />
    </div>
  );
};

export default LandingBanner;
