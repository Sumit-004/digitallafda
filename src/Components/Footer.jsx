
import React from 'react'
import gabbar from '../assets/gabbar1.png'
import fb from '../assets/svg/fb.svg'
import insta from '../assets/svg/insta.svg'
import linkedin from '../assets/svg/linkedin.svg'
import twitter from '../assets/svg/twitter.svg'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="w-full bg-[#1C352D] text-white px-6 md:px-20 py-10">
            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6">

                {/* Left Side */}
                <div className="flex flex-col md:flex-row items-center md:items-center md:w-1/2 gap-6">
                    <div className="flex justify-center md:justify-start">
                        <img src={gabbar} className="h-40 md:h-90 w-130 object-contain" alt="gabbar" />
                    </div>
                    <div className='px-8'>
                        <p className="text-lg md:text-[22px] leading-relaxed text-center md:text-left px-4 md:px-0">
                            Congratulations for traveling from start to the end of this page!
                            We’ll add 10,000 steps to your fitness tracker! 🙂
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-center sm:flex-row md:w-1/2 gap-10">
                    {/* Menu Column 1 */}
                    <ul className="flex-1 text-lg font-semibold flex flex-col gap-4 items-center sm:items-start">
                        <li onClick={() => navigate('/about-us')} className="cursor-pointer hover:scale-105 transition-all duration-200">About Us</li>
                        <li onClick={() => navigate('/service')} className="cursor-pointer hover:scale-105 transition-all duration-200">Services</li>
                        <li onClick={() => navigate('/our-work')} className="cursor-pointer hover:scale-105 transition-all duration-200">Our Work</li>
                        <li onClick={() => navigate('/our-client')} className="cursor-pointer hover:scale-105 transition-all duration-200">Clients</li>
                    </ul>

                    {/* Menu Column 2 */}
                    <ul className="flex-1 text-lg font-semibold flex flex-col gap-4 items-center sm:items-start">
                        <li onClick={() => navigate('/our-team')} className="cursor-pointer hover:scale-105 transition-all duration-200">Our Team</li>
                        <li onClick={() => navigate('/contact-us')} className="cursor-pointer hover:scale-105 transition-all duration-200">Contact Us</li>
                        <li className="cursor-pointer hover:scale-105 transition-all duration-200">Privacy Policy</li>
                        <li className="cursor-pointer hover:scale-105 transition-all duration-200">...</li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex-1 flex sm:flex-col flex-row justify-center items-center gap-6">
                        <img className="w-8 md:w-10 hover:rotate-7 cursor-pointer" src={insta} alt="Instagram" />
                        <img className="w-8 md:w-10 hover:rotate-7 cursor-pointer" src={twitter} alt="Twitter" />
                        <img className="w-8 md:w-10 hover:rotate-7 cursor-pointer" src={fb} alt="Facebook" />
                        <img className="w-8 md:w-10 hover:rotate-7 cursor-pointer" src={linkedin} alt="LinkedIn" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
