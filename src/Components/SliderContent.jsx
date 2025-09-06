import React from 'react'
import bg from '../assets/svg/award-bg-new.svg'

const SliderContent = () => {
  return (
    <div className='px-20'>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '700px',
        }}
      >
      </div>
    </div>
  )
}

export default SliderContent
