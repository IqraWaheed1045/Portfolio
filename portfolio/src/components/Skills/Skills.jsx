import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import tailwindcss from '../assets/tailwindcss.png';
import bootsrap from '../assets/bootsrap.png';
import react from '../assets/react.png';

const Skills = () => {
    return (
        <div className='w-[90%] mx-auto text-center lg:[80vh]  md:h-[80vh] h-[100vh] mt-1 bg-[#384B70] text-white  py-4 px-4 flex flex-col items-center justify-center'>
            <h2 className='my-4 text-[40px] font-bold text-white'>Skills</h2>
            <div className='w-[80%] h-[100%] mx-auto text-center lg:gap-10 gap-6    grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

                {/*Subject Div*/}
                <div className='w-[300px] h-[140px] bg-transparent flex justify-center items-center lg:gap-3 py-2 px-2 rounded-lg   border-2 border-gray-400 animate-slideInLeft'>
                    <div className='w-[90px] h-[90px]'>
                        <img src={html} alt="" className='w-full h-[100%] rounded-full object-cover border-2 border-gray-400' />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-[25px] font-bold'>HTML</h2>
                        <p className='text-[13px]'>HTML Element/Tags Block Vs.Inline Elements Semantic Vs.Non Semantic...</p>
                    </div>
                </div>

                {/*CSS DIV */}
                <div className='w-[300px] h-[140px] border-2 bg-transparent border-gray-300 flex justify-center items-center lg:gap-3 py-2 px-2 rounded-lg'>
                    <div className='w-[90px] h-[90px]'>
                        <img src={css} alt="" className='w-full h-[100%] rounded-full object-cover border-2 border-gray-400' />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-[25px] font-bold'>CSS</h2>
                        <p className='text-[13px]'>Margin,Padding,Flex Box,Grid...</p>
                    </div>
                </div>

                {/*Tailwindcss */}

                <div className='w-[300px] h-[140px] border-2 bg-transparent border-gray-300 flex justify-center items-center gap-3 py-2 px-2 rounded-lg animate-slideInRight'>
                    <div className='w-[90px] h-[90px]'>
                        <img src={tailwindcss} alt="" className='w-full h-[100%] rounded-full object-cover border-2 border-gray-400' />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-[25px] font-bold'>TailwindCss</h2>
                        <p className='text-[13px]'>Margin,Padding,Flex Box,Grid...</p>
                    </div>
                </div>

                {/**Bootsrap */}


                <div className='w-[300px] h-[140px] border-2 bg-transparent border-gray-300 flex justify-center items-center gap-3 py-2 px-2 rounded-lg animate-slideInLeft'>
                    <div className='w-[90px] h-[90px]'>
                        <img src={bootsrap} alt="" className='w-full h-[100%] rounded-full object-cover border-2 border-gray-400' />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-[25px] font-bold'>Bootsrap</h2>
                        <p className='text-[13px]'>Margin,Padding,Flex Box,Grid...</p>
                    </div>
                </div>

                {/**JS */}


                <div className='w-[300px] h-[140px] border-2 bg-transparent border-gray-300 flex justify-center items-center gap-3 py-2 px-2 rounded-lg'>
                    <div className='w-[90px] h-[90px]'>
                        <img src={js} alt="" className='w-full h-[100%] rounded-full object-cover border-2 border-gray-400' />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-[25px] font-bold'>JavaScript</h2>
                        <p className='text-[13px]'>Callback,Promises,Async,Await...</p>
                    </div>
                </div>

                {
                    /**React js */
                }


                <div className='w-[300px] h-[140px] border-2 bg-transparent border-gray-300 flex justify-center items-center gap-3 py-2 px-2 rounded-lg animate-slideInRight'>
                    <div className='w-[90px] h-[90px]'>
                        <img src={react} alt="" className='w-full h-[100%] rounded-full object-cover border-2 border-gray-400' />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-[25px] font-bold'>React Js</h2>
                        <p className='text-[13px]'>Margin,Padding,Flex Box,Grid...</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Skills
