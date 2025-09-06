import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const Header = () => {
      return (
            <div className='w-full h-full flex  bg-amber-200 justify-center '>
                  <div className=' w-[45%]  flex flex-col gap-5 mt-10 ml-10  px-5 py-6 bg-amber-300'>
                        <div className='  flex flex-col gap-3 '>
                              <p className='font-bold text-3xl'> Apke ek ek Sawal Humaare Do Do jawad</p>
                              <p className='font-bold text-xl'>Higha Digital pvt Ltd.</p>
                              <p className='text-sm'>One of the leading digital marketing agency in Bangalore. Write to us about any doubts, We would be glad to discuss your business targets and how we can achieve them through our digital marketing services in Bangalore, Delhi and Mumbai. We'll get back to you at the earliest.</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                              <div className='flex gap-3 w-10'>
                                    <input type="text" placeholder='NAME*' className='font-bold w-35 p-1 rounded-sm border-1 border-black focus:outline-none focus:ring-2  transition-all duration-300' />
                                    <input type="text" placeholder='Email*' className='font-bold w-35 p-1 rounded-sm border-1 border-black focus:outline-none focus:ring-2  transition-all duration-300' />
                              </div>
                              <div className='flex gap-3 w-10'>
                                    <input type="text" placeholder='Phone Number' className='font-bold w-35 p-1 rounded-sm border-1 border-black focus:outline-none focus:ring-2  transition-all duration-300' />
                                    <input type="text" placeholder='State' className='font-bold w-35 p-1 rounded-sm border-1 border-black focus:outline-none focus:ring-2  transition-all duration-300' />
                              </div>
                              
                                    <div className='flex relative'>
                                          <textarea type="text" placeholder='About your brand?' className='font-bold w-70 h-40 p-1 rounded-sm border-1 border-black focus:outline-none focus:ring-2  transition-all duration-300 flex ' /> 
                                          <span><FaRegArrowAltCircleRight className='absolute -bottom-2 left-65 size-10 cursor-pointer hover:size-11 duration-300' /></span>
                                    </div>
                             
                        </div>
                        <div className='flex w-full h-20'>
                              <div className='w-[50%] ml-10 border-r-3 border- py-3 flex flex-col'>
                                    <span>For Any Quiery</span>
                                    <span>email id</span>
                              </div>
                              <div className='w-[50%] ml-15 h-full py-3 flex flex-col'>
                                    <span>Carrier Opportunity</span>
                                    <span>email id</span>
                              </div>
                        </div>


                  </div>

            </div>
      )
}

export default Header
