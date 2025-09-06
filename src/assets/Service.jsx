import React from 'react'
import img1 from "../assets/service1.png"
import img2 from "../assets/service2.png"
import img3 from "../assets/service3.png"
import img4 from "../assets/service4.png"
import img5 from "../assets/service5.png"
import img6 from "../assets/service6.png"
import img7 from "../assets/service7.png"
import img8 from "../assets/service8.png"
import img9 from "../assets/service9.png"
const Service = () => {
      return (
            <div className='w-full h-full flex flex-col '>
                  <div className='flex'>
                        <div className='w-full flex p-7'>
                              <div className=' w-[50%] text-6xl flex justify-center font-bold'>
                                    <span className='w-[50%] p-5 '>Our Services</span>
                              </div>
                              <div className='w-[50%] text-xl p-3'>
                                    <span >We help businesses reach their full potential by creating a brand identity that is authentic and reflective of them. We understand that every brand comes with its own unique challenges, and hence requires expertise. We join hands with you as your growth partners and focus on delivering a power-packed panga each time!</span>
                              </div>
                        </div>
                  </div>
                  <div className='flex flex-col gap-10'>
                        <div className='w-full flex '>
                              <div className='w-[60%] flex flex-col items-center '>
                                    <span className='w-[45%] text-3xl font-bold p-10 '>Creative & Digital Strategy</span>
                                    <span className='w-105 px-10 text-xl'>We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.</span>
                              </div>
                              <div className='w-[40%]'>
                                    <img src={img1} alt="" />
                              </div>
                        </div>
                        <div className='w-full flex '>
                              <div className='w-[40%] ml-70'>
                                    <img src={img2} alt="" />
                              </div>
                              <div className='w-[60%] flex flex-col items-center '>
                                    <span className='w-[55%] text-3xl font-bold p-10 text-right'>Media Planning& Buying</span>
                                    <span className='w-105 px-10 text-xl text-right'>We help you profitably define your marketing goals with our expertise in media planning and buying.</span>
                              </div>
                        </div>
                        <div className='w-full flex '>
                              <div className='w-[60%] flex flex-col items-center '>
                                    <span className='w-[45%] text-3xl font-bold p-10'>Analytics & SEO</span>
                                    <span className='w-105 px-9 text-xl'>The P in Panga stands for performance and our SEO and Analytics team delivers it with appropriate insights that have the ability to transform your business.</span>
                              </div>
                              <div className='w-[40%]'>
                                    <img src={img3} alt="" />
                              </div>
                        </div>
                        <div className='w-full flex '>
                              <div className='w-[40%] ml-70'>
                                    <img src={img4} alt="" />
                              </div>
                              <div className='w-[60%] flex flex-col items-center '>
                                    <span className='w-[60%] text-3xl font-bold p-8 text-right'>Branding & MarketingCommunications</span>
                                    <span className='w-100 px- text-xl text-right'>When we say we give your brand a VOICE we mean – V : Versatile, O : Omnipotent, I : Impressional, C : Captivating, E : Empowered way of branding and communicating your business.</span>
                              </div>
                        </div>
                        <div className='w-full flex '>
                              <div className='w-[60%] flex flex-col items-center '>
                                    <span className='w-[45%] text-3xl font-bold p-10'>Mobile & WebsiteUI/UX</span>
                                    <span className='w-105 px-9 text-xl'>From the essential to the ornate, everything is taken care of completely, to offer a user-friendly interface and experience to your consumers.</span>
                              </div>
                              <div className='w-[40%]'>
                                    <img src={img5} alt="" />
                              </div>
                        </div>
                        <div className='w-full flex '>
                              <div className='w-[40%] ml-70'>
                                    <img src={img6} alt="" />
                              </div>
                              <div className='w-[60%] flex flex-col items-center '>
                                    <span className='w-[60%] text-3xl font-bold p-8 text-right'>Influencer Management</span>
                                    <span className='w-100 px- text-xl text-right'>To make your idea come to life, we dive into a pool of talent and find the right influencer(s) for the task in hand.</span>
                              </div>
                        </div>
                        <div className='w-full flex '>
                              <div className='w-[60%] flex flex-col items-center '>
                                    <span className='w-[45%] text-3xl font-bold p-10'>Video Production</span>
                                    <span className='w-105 px-9 text-xl'>A perfect storyline is incomplete without the right set of shots taken from the perfect angles.</span>
                              </div>
                              <div className='w-[40%]'>
                                    <img src={img7} alt="" />
                              </div>
                        </div>
                        <div className='w-full flex '>
                              <div className='w-[40%] ml-70'>
                                    <img src={img8} alt="" />
                              </div>
                              <div className='w-[60%] flex flex-col items-center '>
                                    <span className='w-[60%] text-3xl font-bold p-8 text-right'>Consulting Services</span>
                                    <span className='w-100 px- text-xl text-right'>We do a thorough research and integrate industry insights with internet trends to give you the best advice.</span>
                              </div>
                        </div>
                         <div className='w-full flex '>
                              <div className='w-[60%] flex flex-col items-center '>
                                    <span className='w-[45%] text-3xl font-bold p-10'>Technology</span>
                                    <span className='w-105 px-9 text-xl'>Only unrealistic aspect of us using technology is the experience we create for you outside our daily lives using the best of tech and tools.</span>
                              </div>
                              <div className='w-[40%]'>
                                    <img src={img9} alt="" />
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Service
