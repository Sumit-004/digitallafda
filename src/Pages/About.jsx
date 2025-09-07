import React, { useEffect, useRef } from 'react'
import image1 from '../assets/customer-delight-icon-1.png'
import image2 from '../assets/customer-delight-icon-2.png'
import image3 from '../assets/customer-delight-icon-3.png'
import image4 from '../assets/customer-delight-icon-4.png'
import office1 from '../assets/office1.webp'
import office2 from '../assets/office2.jpeg'
import office3 from '../assets/office3.webp'
import office4 from '../assets/office4.webp'
import office5 from '../assets/office5.jpg'


const About = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            if (container) {
                scrollAmount += 1; // speed (increase for faster scroll)
                if (scrollAmount >= container.scrollWidth / 2) {
                    scrollAmount = 0; // reset when half scrolled (since we duplicate images)
                }
                container.scrollLeft = scrollAmount;
            }
            requestAnimationFrame(scroll);
        };

        scroll();
    }, []);

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

    const office = [
        { image: office1 },
        { image: office2 },
        { image: office3 },
        { image: office4 },
        { image: office5 },

    ]

    return (
        <div>
            <div className='mt-30 md:px-50 px-10 flex flex-col gap-5 justify-center'>
                <div className='flex justify-center'>
                    <h1 className='md:text-6xl text-4xl text-center font-bold'>Plan, Create and Connect</h1>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='md:text-2xl text-xl font-semibold text-center'>We are a passionate creative marketing and advertising agency, driven by ideas that spark connections. Our team designs, plans, and delivers impactful strategies that bring brands closer to their audiences while blending seamlessly with the digital landscape.</p>
                    <p className='md:text-2xl text-xl text-center'>Fuelled by imagination, countless brainstorming sessions, and endless cups of coffee, we craft campaigns that leave lasting impressions. With a vibrant team and creative hubs across India, we turn every idea into a story worth sharing.</p>
                </div>
            </div>

            <div
                ref={containerRef}
                className="w-full overflow-hidden whitespace-nowrap flex mt-20"
                style={{ scrollBehavior: "auto" }}
            >

                {[...office, ...office].map((img, index) => (
                    <div
                        key={index}
                        className="md:w-[500px] w-50 h-50 md:h-[400px] flex-shrink-0 overflow-hidden"
                    >
                        <img
                            src={img.image}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>



            <div className='mt-10 md:px-50 px-10 flex flex-col gap-5 justify-center'>
                <div className='flex justify-center'>
                    <h1 className='md:text-6xl text-4xl font-bold'>Costumer Delight</h1>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='md:text-2xl text-xl font-semibold text-center'>We don’t just create designs — we craft experiences that make our clients blush with joy. At Content Gurus, our superpower is turning “just an idea” into a head-turning, thumb-stopping, jaw-dropping reality.</p>
                    <p className='md:text-2xl text-xl text-center'>We believe creativity should feel like a warm hug, a burst of laughter, or that first bite of sizzling hot fries at midnight. Our mission? To leave you so delighted that you won’t just applaud us… you’ll secretly want to high-five us forever.</p>
                </div>
            </div>
            <div className="md:px-50 w-full flex flex-col md:flex-row justify-center items-center md:gap-10 gap-5 my-8">
                {content.map((con, i) => (
                    <div
                        key={i}
                        className="w-65 h-65 p-4 bg-purple-200 flex flex-col gap-3 justify-center items-center text-center"
                    >
                        <img src={con.img} alt="" className="mx-auto" />
                        <p>{con.para}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default About
