import React, { useState, useEffect } from 'react'
import Logo from '../assets/digitallafda.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const navigate = useNavigate();

    return (
        <div className={`fixed top-0 z-60 transition-all duration-300 ease-in-out w-full bg-white flex justify-between px-14 border-b border-gray-300 ${isScrolled ? 'h-[14vh] shadow-md bg-opacity-90' : 'h-[17vh]'}`}>
            <div onClick={()=>navigate('/')} className='h-full flex items-center'>
                <img src={Logo} alt="" className='w-70 cursor-pointer' />
            </div>
            <div className='h-full'>
                <ul className='h-full flex gap-10 text-lg items-center'>
                    <li onClick={()=>navigate('/about-us')} className='flex flex-col justify-center items-center gap-1.5 group cursor-pointer'>
                        <svg className='opacity-0 group-hover:opacity-100 transition-opacity duration-100' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="58" fill="#E3F2FD" stroke="#2196F3" strokeWidth="4" />
                            <circle cx="60" cy="45" r="18" fill="#90CAF9" />
                            <path d="M30 95c0-15 60-15 60 0" fill="#64B5F6" />
                        </svg>
                        <p>ABOUT US</p></li>
                    <li onClick={()=>navigate('/service')} className='flex flex-col justify-center items-center gap-1.5 group cursor-pointer'>
                        <svg className='opacity-0 group-hover:opacity-100 transition-opacity duration-100' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="58" fill="#FFF8E1" stroke="#FFC107" strokeWidth="4" />
                            <circle cx="60" cy="60" r="22" fill="#FFD54F" />
                            <path d="M60 28v10M60 82v10M28 60h10M82 60h10M40 40l7 7M73 73l7 7M80 40l-7 7M47 73l-7 7"
                                stroke="#FFA000" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                        SERVICES</li>
                    <li onClick={()=>navigate('/our-work')} className='flex flex-col justify-center items-center gap-1.5 group cursor-pointer'>
                        <svg className='opacity-0 group-hover:opacity-100 transition-opacity duration-100' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="58" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="4" />
                            <rect x="30" y="45" width="60" height="40" rx="6" fill="#81C784" />
                            <path d="M45 45v-5a15 15 0 0 1 30 0v5" fill="#66BB6A" />
                        </svg>
                        OUR WORK</li>
                    <li onClick={()=>navigate('/our-client')} className='flex flex-col justify-center items-center gap-1.5 group cursor-pointer'>
                        <svg className='opacity-0 group-hover:opacity-100 transition-opacity duration-100' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="58" fill="#FCE4EC" stroke="#E91E63" strokeWidth="4" />
                            <circle cx="45" cy="50" r="14" fill="#F06292" />
                            <circle cx="75" cy="50" r="14" fill="#EC407A" />
                            <path d="M25 90c0-12 70-12 70 0" fill="#F48FB1" />
                        </svg>
                        CLIENTS</li>
                    <li onClick={()=>navigate('/our-team')} className='flex flex-col justify-center items-center gap-1.5 group cursor-pointer'>
                        <svg className='opacity-0 group-hover:opacity-100 transition-opacity duration-100' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="58" fill="#EDE7F6" stroke="#673AB7" strokeWidth="4" />
                            <circle cx="60" cy="40" r="12" fill="#9575CD" />
                            <circle cx="40" cy="50" r="10" fill="#B39DDB" />
                            <circle cx="80" cy="50" r="10" fill="#B39DDB" />
                            <path d="M35 85c0-10 50-10 50 0" fill="#7E57C2" />
                        </svg>
                        OUR TEAM</li>
                    <li onClick={()=>navigate('/contact-us')} className='flex flex-col justify-center items-center gap-1.5 group cursor-pointer'>
                        <svg className='opacity-0 group-hover:opacity-100 transition-opacity duration-100' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="58" fill="#E0F7FA" stroke="#00ACC1" strokeWidth="4" />
                            <rect x="30" y="45" width="60" height="40" rx="6" fill="#4DD0E1" />
                            <path d="M30 47l30 23 30-23" fill="none" stroke="#006064" strokeWidth="4" />
                        </svg>
                        CONTACT US</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
