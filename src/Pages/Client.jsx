import React from 'react'
import img1 from '../assets/company1.jpeg'
import img2 from '../assets/company2.jpeg'
import img3 from '../assets/company3.avif'
import img4 from '../assets/company4.png'
import img5 from '../assets/company5.png'
import logo from '../assets/clientlogo.png'

const Client = () => {

    const client = [
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
        { image: img3 },
        { image: img2 },
        { image: img1 },
        { image: img5 },
        { image: img1 },
        { image: img4 },
        { image: img2 },
        { image: img3 },
        { image: img1 },
        { image: img5 },
        { image: img5 },
        { image: img2 },
        { image: img4 },
    ]

    return (
        <div className='mt-35 mb-14 flex flex-col gap-10'>
            <div className='flex justify-center items-center gap-2'>
                <h1 className='text-5xl font-bold'>
                    Our Client
                </h1>
                <img className='w-20' src={logo} alt="" />
            </div>

            <div className="w-full px-30 grid grid-cols-2 md:grid-cols-4 gap-16 justify-items-center">
                {client.map((company, index) => (
                    <div
                        key={index}
                        className="w-[120px] h-[120px] flex items-center justify-center"
                    >
                        <img
                            className="max-w-full max-h-full object-contain"
                            src={company.image}
                            alt={`client-${index}`}
                        />
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Client
