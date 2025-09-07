import React from 'react'
import LandingBanner from '../Components/LandingBanner'
import ServiceContent from '../Components/ServiceContent'
import bg from '../assets/bg.png'
import MiddleContent from '../Components/MiddleContent'
import SliderContent from '../Components/SliderContent'

const Home = () => {
  return (
    <div>
      <LandingBanner />
      <ServiceContent />
      <div>
        <img className='w-full my-4' src={bg} alt="" />
      </div>
      <MiddleContent />
      <SliderContent />
    </div>
  )
}

export default Home
