import React from 'react'
import send from '../assets/send.png'

const Contact = () => {
      return (
            <div className='w-full h-auto flex justify-center md:mt-22 mt-18 py-10 px-3 bg-gradient-to-br from-slate-500 to-zinc-200'
            // style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",}}
            >
                  <div className='md:w-[50%] w-full flex flex-col gap-5 mt-10 md:px-10 px-3 py-6 bg-white shadow-2xl rounded-2xl'>
                        <div className='flex flex-col gap-3 '>
                              <p className='font-bold text-3xl'>Reach Out, We’ll Reach Back Faster</p>
                              <p className='text-sm'>Write to us about any doubts, We would be glad to discuss your business targets and how we can achieve them through our digital marketing services in Delhi. We'll get back to you at the earliest.</p>
                        </div>
                        <div className='flex flex-col w-full gap-5'>
                              <div className='flex gap-3'>
                                    <input type="text" placeholder='Name*' className='w-full px-3 py-1 rounded-sm border-1 focus:outline-none focus:ring-1 transition-all duration-300' />
                                    <input type="text" placeholder='Email*' className='w-full px-3 py-1 rounded-sm border-1 focus:outline-none focus:ring-1 transition-all duration-300' />
                              </div>
                              <div className='flex gap-3 w-full'>
                                    <input type="text" placeholder='Phone Number' className='w-full px-3 py-1 rounded-sm border-1 focus:outline-none focus:ring-1 transition-all duration-300' />
                                    <input type="text" placeholder='State' className='w-full px-3 py-1 rounded-sm border-1 focus:outline-none focus:ring-1 transition-all duration-300' />
                              </div>

                              <div className='flex w-full relative'>
                                    <textarea type="text" placeholder='About your brand?' className='w-full h-30 px-3 py-1 rounded-sm border-1 focus:outline-none focus:ring-1 transition-all duration-300 flex ' />
                                    <img src={send} className='absolute -right-3 -bottom-5 md:w-18 w-12 cursor-pointer' alt="" />
                              </div>

                        </div>
                        <div className='flex w-full h-20'>
                              <div className='w-[50%] border-r-1 py-3 flex flex-col items-center'>
                                    <span className='font-semibold'>For Any Quiery</span>
                                    <span>digitallafda@gmail.com</span>
                              </div>
                              <div className='w-[50%] h-full py-3 flex flex-col items-center'>
                                    <span className='font-semibold'>Carrier Opportunity</span>
                                    <span>xyz@gmail.com</span>
                              </div>
                        </div>


                  </div>

            </div>
      )
}

export default Contact
