import React from 'react'
import LandingBanner from '../Components/LandingBanner'
import ServiceContent from '../Components/ServiceContent'
import bg from '../assets/bg.png'
// import up from '../assets/svg/up-arrow.svg'
import MiddleContent from '../Components/MiddleContent'
import SliderContent from '../Components/SliderContent'

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <LandingBanner />
      <ServiceContent />
      <div>
        <img className='w-full my-4' src={bg} alt="" />
      </div>
      <MiddleContent />
      <SliderContent />
      {/* <Footer/> */}
      {/* <img src={up} className='fixed bottom-10 right-10 w-10' alt="" /> */}
    </div>
  )
}

export default Home
