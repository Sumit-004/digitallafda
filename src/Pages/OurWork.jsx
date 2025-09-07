
import React, { useState } from 'react'
import img1 from "../assets/img_1.jpg"
import img2 from "../assets/img_2.jpg"
import img3 from "../assets/img_3.jpg"
import img4 from "../assets/img_4.png"
import img5 from "../assets/img_5.jpg"
import img6 from "../assets/img_6.png"
import img7 from "../assets/img_7.jpg"
import img8 from "../assets/img_8.png"

const OurWork = () => {
  const work = [
    { image: img1, category: "BRANDING" },
    { image: img2, category: "CASE STUDIES" },
    { image: img3, category: "CREATIVE HUB" },
    { image: img4, category: "PERFORMANCE MARKETING" },
    { image: img5, category: "PRODUCTION" },
    { image: img6, category: "UI/UX" },
    { image: img7, category: "CASE STUDIES" },
    { image: img8, category: "BRANDING" },
  ]

  const categories = ["ALL", "BRANDING", "CASE STUDIES", "CREATIVE HUB", "PERFORMANCE MARKETING", "PRODUCTION", "UI/UX"]

  const [activeCategory, setActiveCategory] = useState("ALL")

  const filteredWork =
    activeCategory === "ALL"
      ? work
      : work.filter((item) => item.category === activeCategory)

  return (
    <div className="w-full flex flex-col gap-10 md:mt-25 mt-22 mb-20 px-6 md:px-16">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:px-40 md:py-16 ">
        <div className="text-4xl md:text-6xl lg:text-7xl w-full md:w-1/2 text-center md:text-left font-bold">
          <span>Our Brand Raids</span>
        </div>
        <div className="w-full md:w-1/2 text-base md:text-lg lg:text-xl font-semibold text-gray-700">
          From Google Ads that boosted conversions by 30%, to Tabula native ads
          increasing CTR by 35%, and marketing campaigns that doubled social
          media engagement, we set SMART goals and smash them every time. Client
          satisfaction and creative brilliance are our top priorities. Ready to
          achieve your next conquest with us?
        </div>
      </div>

      {/* Categories */}
      <div className="mt-4">
        <ul className="flex flex-wrap gap-4 md:gap-6 justify-center font-bold text-sm md:text-lg">
          {categories.map((cat) => (
            <li
              key={cat}
              className={`cursor-pointer relative pb-1 transition-all duration-200 ${
                activeCategory === cat ? "text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {filteredWork.map((push, index) => (
          <div
            key={index}
            className="w-full h-74 md:h-100 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-full h-full object-cover"
              src={push.image}
              alt={`work-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurWork

