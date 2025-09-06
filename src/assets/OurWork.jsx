import React from 'react'
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
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
  ]
  return (
    <div className='w-full flex flex-col gap-5'>
      <div className='w-full flex p-7'>
        <div className='text-7xl flex w-[50%] justify-center font-bold'>
         <span className='w-[50%]'> Our Brand  Raids </span>
        </div>
        <div className='w-[50%] text-xl font-semibold px-6'>From Google Ads that boosted conversions by 30%, to Tabula native ads increasing CTR by 35%, and marketing campaigns that doubled social media engagement, we set SMART goals and smash them every time. Client satisfaction and creative brilliance are our top priorities. Ready to achieve your next conquest with us?</div>
      </div>
      <div>
        <ul className='flex gap-4 justify-center font-bold text-xl'>
          <li>ALL</li>
          <li>BRANDING</li>
          <li>CASE STUDIES</li>
          <li>CREATIVE HUB</li>
          <li>PERFORMANCE MARKETING</li>
          <li>PRODUCTION</li>
          <li>UI/UX</li>
        </ul>
      </div>
      <div className='flex flex-wrap gap-6 w-full px-25 py-10'>
        {work.map((push) => (
          <div className='w-80 h-100'>
            <div className='w-full h-full overflow-hidden'>
              <img className='w-full h-full object-cover' src={push.image} alt="" />
            </div>
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default OurWork
