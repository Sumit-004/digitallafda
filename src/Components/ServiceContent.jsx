import React, { useState } from 'react'
import meta from '../assets/metaAd.jpg'
import google from '../assets/googleAd.png'
import taboola from '../assets/taboolaAd.jpg'
import webdev from '../assets/websitedev.jpg'
import socialmedia from '../assets/socialmedia.webp'
import graphics from '../assets/graphics.webp'
import video from '../assets/video.webp'
import seo from '../assets/SEO.webp'

const ServiceContent = () => {

    const Services = [
        {
            id: 1,
            title: "META ADS",
            image: meta,
            description: "Run targeted Facebook and Instagram ads to maximize reach and conversions."
        },
        {
            id: 2,
            title: "GOOGLE ADS",
            image: google,
            description: "Get instant visibility on Google with optimized search and display campaigns."
        },
        {
            id: 3,
            title: "TABOOLA ADS",
            image: taboola,
            description: "Boost traffic with native advertising and smart content placements."
        },
        {
            id: 4,
            title: "WEBSITE DEVELOPMENT",
            image: webdev,
            description: "Build responsive, modern websites tailored to your brand and business goals."
        },
        {
            id: 5,
            title: "SOCIAL MEDIA MANAGEMENT",
            image: socialmedia,
            description: "Grow your online presence with engaging posts and account management."
        },
        {
            id: 6,
            title: "GRAPHIC DESIGN",
            image: graphics,
            description: "Eye-catching graphics, logos, and creatives designed for impact."
        },
        {
            id: 7,
            title: "VIDEO EDITING",
            image: video,
            description: "High-quality video editing to tell your brand story effectively."
        },
        {
            id: 8,
            title: "SEO SERVICES",
            image: seo,
            description: "Improve rankings and organic traffic with advanced SEO strategies."
        },
    ];

    const [activeService, setActiveService] = useState(Services[0]);

    return (
        <div className="w-full h-[80vh] flex">

            {/* Left side menu */}
            <div
                className="relative w-[50%] h-full flex flex-col justify-center items-center text-white p-6 bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${activeService.image})` }}
            >
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Content on top */}
                <ul className="relative z-10 flex flex-col gap-4">
                    {Services.map((service) => (
                        <li
                            key={service.id}
                            onClick={() => setActiveService(service)}
                            className="cursor-pointer"
                        >
                            <h1
                                className={`text-3xl font-bold text-transparent [-webkit-text-stroke:2px_white] transition-all duration-300 
          ${activeService.id === service.id ? 'text-white' : 'hover:scale-102'}`}
                            >
                                {service.title}
                            </h1>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side preview */}
            <div
                className="w-[50%] h-full flex flex-col justify-center items-center text-black p-6"
            >
                <div className="w-full flex flex-col justify-center items-center p-6 rounded-2xl text-center">
                    <h2 className="text-4xl font-bold mb-4">{activeService.title}</h2>
                    <div className='flex justify-center h-100 w-90 border-2'>
                        <img src={activeService.image} alt="" className='object-cover'/>
                    </div>
                    <p className="text-lg">{activeService.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceContent
