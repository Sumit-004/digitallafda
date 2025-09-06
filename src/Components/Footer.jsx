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
        <div className='h-[60vh] w-full flex bg-[#1C352D] text-white px-35'>
            {/* Left Side Content */}
            <div className='w-[50%] h-full flex items-center'>
                <div className='w-[50%] flex justify-center'>
                    <img src={gabbar} className='h-60' alt="" />
                </div>
                <div className='w-[50%] flex justify-start pr-15 text-[22px]'>
                    Congratulations for traveling from start to the end of this page! We’ll add 10,000 steps to your fitness tracker!
                    🙂
                </div>
            </div>
            {/* Right Side Content */}
            <div className='w-[50%] h-full flex'>
                <div className='w-1/3 h-full flex justify-center items-center'>
                    <ul className='text-xl font-semibold flex flex-col gap-4'>
                        <li onClick={()=>navigate('/about-us')} className='cursor-pointer hover:scale-105 transition-all duration-200'>About Us</li>
                        <li onClick={()=>navigate('/service')} className='cursor-pointer hover:scale-105 transition-all duration-200'>Services</li>
                        <li onClick={()=>navigate('/our-work')} className='cursor-pointer hover:scale-105 transition-all duration-200'>Our Work</li>
                        <li onClick={()=>navigate('/our-client')} className='cursor-pointer hover:scale-105 transition-all duration-200'>Clients</li>
                    </ul>
                </div>
                <div className='w-1/3 h-full flex justify-center items-center'>
                    <ul className='text-xl font-semibold flex flex-col gap-4'>
                        <li onClick={()=>navigate('/our-team')} className='cursor-pointer hover:scale-105 transition-all duration-200'>Our Team</li>
                        <li onClick={()=>navigate('/contact-us')} className='cursor-pointer hover:scale-105 transition-all duration-200'>Contact Us</li>
                        <li className='cursor-pointer hover:scale-105 transition-all duration-200'>Privacy Policy</li>
                        <li className='cursor-pointer hover:scale-105 transition-all duration-200'>...</li>
                    </ul>
                </div>
                <div className='w-1/3 h-full flex flex-col items-center justify-center gap-7'>
                    <img className='w-10 hover:rotate-6 cursor-pointer' src={insta} alt="" />
                    <img className='w-10 hover:rotate-6 cursor-pointer' src={twitter} alt="" />
                    <img className='w-10 hover:rotate-6 cursor-pointer' src={fb} alt="" />
                    <img className='w-10 hover:rotate-6 cursor-pointer' src={linkedin} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
