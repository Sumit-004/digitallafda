
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
    <div className="pt-10 pb-20">
      {/* Cards Section */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 px-6 sm:px-10 md:px-28">
        {/* Card 1 */}
        <div className="relative h-[300px] md:h-[70vh] w-full md:w-1/3 bg-blue-700 rounded-tl-[20%] hover:scale-103 transition-all duration-400">
          <p className="text-lg sm:text-xl md:text-2xl px-6 sm:px-8 pt-8 sm:pt-12 text-white font-bold">
            Looking to become the next big name everyone’s talking about?
          </p>
          <div className="flex justify-end px-6 sm:px-10">
            <button
              onClick={() => navigate('/contact-us')}
              className="px-4 py-2 cursor-pointer text-white bg-black rounded-2xl mt-4 text-sm sm:text-base"
            >
              Request a proposal.
            </button>
          </div>
          <img className="absolute w-28 sm:w-40 md:w-55 -bottom-10 sm:-bottom-14 left-6 sm:left-14" src={Elon} alt="" />
        </div>

        {/* Card 2 */}
        <div className="relative h-[300px] md:h-[70vh] w-full md:w-1/3 bg-yellow-500 rounded-tl-[20%] hover:scale-103 transition-all duration-400">
          <p className="text-lg sm:text-xl md:text-2xl px-6 sm:px-8 pt-8 sm:pt-12 text-white font-bold">
            Fear of missing out on the chance to do your life’s greatest work?
          </p>
          <p className="text-sm sm:text-lg md:text-xl px-6 sm:px-8 py-4 font-semibold text-white">
            Join our team of Mafias.
          </p>
          <img className="absolute w-28 sm:w-40 md:w-55 -bottom-10 sm:-bottom-14 left-6 sm:left-14" src={SRK} alt="" />
        </div>

        {/* Card 3 */}
        <div className="relative h-[300px] md:h-[70vh] w-full md:w-1/3 bg-red-700 rounded-tl-[20%] hover:scale-103 transition-all duration-400">
          <p className="text-lg sm:text-xl md:text-2xl px-6 sm:px-8 pt-8 sm:pt-12 text-white font-bold">
            Excited about the wonderful world of digital storytelling?
          </p>
          <div className="flex justify-end px-6 sm:px-10">
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 cursor-pointer text-white bg-black rounded-2xl mt-4 text-sm sm:text-base"
            >
              Sign up for our newsletter.
            </button>
          </div>
          <img className="absolute w-28 sm:w-40 md:w-55 -bottom-10 sm:-bottom-14 left-6 sm:left-14" src={SK} alt="" />
        </div>
      </div>

      {/* Newsletter Modal */}
      {open && (
        <div className="fixed z-50 inset-0 w-full h-full backdrop-blur-2xl flex justify-center items-center px-4">
          <div className="w-full max-w-md sm:max-w-lg md:w-150 h-auto flex flex-col gap-4 px-6 sm:px-10 md:px-20 py-6 bg-[#541212] relative rounded-md">
            <RxCross2
              onClick={() => setOpen(false)}
              className="absolute text-white right-4 top-4 cursor-pointer"
            />
            <div className="flex justify-center">
              <p className="text-lg sm:text-xl font-semibold text-white">Subscribe to our Newsletter</p>
            </div>
            <div className="flex justify-center">
              <p className="text-center text-sm sm:text-base text-white">
                Excited about the wonderful world of digital storytelling? Join our subscribers list now.
              </p>
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter Your Email Here *"
                className="border-none w-full px-3 py-2 rounded-sm text-sm bg-white sm:text-base"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-yellow-400 px-4 py-2 cursor-pointer text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MiddleContent
