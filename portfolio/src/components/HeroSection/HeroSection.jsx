import React from 'react'
import {Link} from 'react-router-dom';

import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='w-full h-screen p-1 flex items-center flex-col bg-gray-500 font-Ubuntu hero'>
            <h2 className='font-Ubuntu text-[50px] text-bold my-14 text-yellow-400'>Portfolio</h2>
            {/*Left Part */}
            <div className='flex-1  pl-[70px] text-yellow-400 flex flex-col justify-center  '>
                <h4 className='text-[13px] tracking-wider leading-4 uppercase'>Combination of Technology and Creativity.</h4>
                <h2 className='text-[40px] font-bold leading-11 mr-[20px] '>Code that speaks, designs that captivate, and experiences that last</h2>
                <p className='text-[15px]'>I Iqra Waheed a passionate Frontend Developer having strong <span>Knowledge</span> about HTML,CSS (Tailwindcss(Material UI,Desi UI),Bootsrap) ,JavaScript,React Js.</p>
                <div className='my-4'>
                    <button className='border py-2 px-2 rounded-full border-1 border-gray-400 bg-blue-950 text-yellow-400 mx-3'><Link to='portfolio'>View Now</Link></button>
                    {/* <button className='border py-2 px-2 rounded-full border-1 border-black bg-blue-950 text-yellow-400'>Download CV</button> */}
                </div>
            </div>
            {/*Right Part */}
            <div className='flex-1  flex items-center justify-center'>
                <div>
                    {/* <img src={girl} alt="portfolio-img" /> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection
