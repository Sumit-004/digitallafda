import React from 'react'
import image1 from '../assets/customer-delight-icon-1.png'
import image2 from '../assets/customer-delight-icon-2.png'
import image3 from '../assets/customer-delight-icon-3.png'
import image4 from '../assets/customer-delight-icon-4.png'


const About = () => {

    const content = [
        {
            img: image1,
            para: "We help you share your ideas with the world."
        },
        {
            img: image2,
            para: "We give you the resources best suited for your brand."
        },
        {
            img: image3,
            para: "We anticipate your needs better than you can."
        },
        {
            img: image4,
            para: "We make a mean cup of tea and our coffee is “mwah”"
        },

    ]

    return (
        <div>
            <div className='mt-35 px-50 flex flex-col gap-5 justify-center'>
                <div className='flex justify-center'>
                    <h1 className='text-6xl font-bold'>Costumer Delight</h1>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl font-semibold text-center'>We don’t just create designs — we craft experiences that make our clients blush with joy. At Content Gurus, our superpower is turning “just an idea” into a head-turning, thumb-stopping, jaw-dropping reality.</p>
                    <p className='text-2xl text-center'>We believe creativity should feel like a warm hug, a burst of laughter, or that first bite of sizzling hot fries at midnight. Our mission? To leave you so delighted that you won’t just applaud us… you’ll secretly want to high-five us forever.</p>
                </div>
            </div>
            <div className='px-50 w-full flex justify-center gap-10 my-8'>
                {content.map((con) => (
                    <div className='w-65 h-65 p-4 bg-purple-200 flex flex-col gap-3 justify-center items-center'>
                        <img src={con.img} alt="" />
                        <p>{con.para}</p>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default About
