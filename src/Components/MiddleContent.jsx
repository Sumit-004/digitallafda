import React, { useState } from 'react'
import SRK from '../assets/srk.png'
import SK from '../assets/sk.png'
import Elon from '../assets/elon.png'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const MiddleContent = () => {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    return (
        <div className='pt-10 pb-20'>
            <div className='h-[70vh] w-full flex gap-10 px-28'>
                <div className='relative h-full w-1/3 bg-blue-700 rounded-tl-[20%] hover:scale-103 transition-all duration-400'>
                    <p className='text-2xl px-8 pt-12 text-white font-bold'>Looking to become the next big name everyone’s talking about?</p>
                    <div className='flex justify-end px-10'>
                        <button onClick={()=>navigate('/contact-us')} className='px-4 py-2 cursor-pointer text-white bg-black rounded-2xl mt-4'>Request a proposal. </button>
                    </div>
                    <img className='absolute w-55 h-55 -bottom-14 left-14' src={Elon} alt="" />
                </div>
                <div className='relative h-full w-1/3 bg-yellow-500 rounded-tl-[20%] hover:scale-103 transition-all duration-400'>
                    <p className='text-2xl px-8 pt-12 text-white font-bold'>Fear of missing out on the chance to do your life’s greatest work?</p>
                    <p className='text-xl px-8 py-4 font-semibold text-white'>Join our team of Mafias.</p>
                    <img className='absolute w-55 h-55 -bottom-14 left-14' src={SRK} alt="" />

                </div>
                <div className='relative h-full w-1/3 bg-red-700 rounded-tl-[20%] hover:scale-103 transition-all duration-400'>
                    <p className='text-2xl px-8 pt-12 text-white font-bold'>Excited about the wonderful world of digital storytelling?                    </p>
                    <div className='flex justify-end px-10'>
                        <button onClick={()=>setOpen(true)} className='px-4 py-2 cursor-pointer text-white bg-black rounded-2xl mt-4'>Sign up for our newsletter. </button>
                    </div>
                    <img className='absolute w-55 h-55 -bottom-14 left-14' src={SK} alt="" />
                </div>
            </div>

            {/* Newsletter */}
            {open ? <div className='fixed z-50 top-0 bottom-0 w-full h-full backdrop-blur-2xl flex justify-center items-center my-16'>
                <div className='w-150 h-70 flex flex-col gap-4 px-20 py-6 bg-[#541212] relative rounded-md'>
                    <RxCross2 onClick={()=>setOpen(false)} className='absolute text-white right-4 top-4 cursor-pointer'/>
                    <div className='flex justify-center'>
                        <p className='text-xl font-semibold text-white'>Subscribe to our Newsletter</p>
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-center text-white'>
                            Excited about the wonderful world of digital storytelling? Join our subscribers list now.
                        </p>
                    </div>
                    <div className='w-full'>
                        <input type="email" placeholder='Enter Your Email Here *' className='border-none w-full px-3 py-2 bg-white'/>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-yellow-400 px-4 py-2 cursor-pointer'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div> : ''}
        </div>
    )
}

export default MiddleContent
