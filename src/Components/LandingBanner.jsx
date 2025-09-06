import React, { useState } from 'react'
import googleBanner from '../assets/google-banner.png'
import meta from '../assets/svg/meta-svg.svg'
import google from '../assets/svg/google-svg.svg'

const LandingBanner = () => {

    const [hovered, setHovered] = useState(false)


    return (
        <div className={`relative w-full h-[87vh] flex items-center justify-center px-20 bg-[#1C352D] text-white mt-25`}
            style={{
                background: hovered
                    ? `url(${googleBanner}) center/cover no-repeat`
                    : `#1C352D`,
            }}      >
            <h1 className='text-6xl font-semibold text-center mx-20'>
                Your <span className={`text-6xl font-bold z-30 ${hovered ? 'text-black bg-amber-300' : ''} `} onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>Google,<span className='text-6xl font-bold'> Meta,</span></span> and <span className='text-6xl font-bold'>Taboola Ads</span> experts — smart enough to know better, bold enough to think bigger!
            </h1>
            <img src={meta} className='w-40 absolute top-30 right-20 rotate-40' alt="" />
            <img src={google} className='w-40 absolute bottom-30 left-20 -rotate-20' alt="" />

        </div>
    )
}
export default LandingBanner
