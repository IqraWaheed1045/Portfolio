import React from 'react'
import musicplayer from '../assets/musicplayer.png';
import calculator from '../assets/calculator.png';
import portfolio from '../assets/portfolio.png';

const Projects = () => {
    return (
        <div className='w-[90%] mx-auto text-center lg:h-[90vh] h-[50vh] mt-1 bg-[#384B70] py-4 px-4  my-8 flex items-center justify-center flex-col'>
            <h2 className='lg:text-[30px] text-[50px] font-bold text-white '>Projects</h2>
            <div className='w-full h-full  flex justify-center  items-center gap-3 '>
                {/**1ST project */}
                <div className='w-[250px] h-[300px] bg-transparent border-2 border-gray-400 rounded-lg p-1 '>
                    <div  className='h-[80%] w-full rounded-lg'>
                        <img src={musicplayer} alt="" className='w-full h-[100%] object-cover rounded-lg'/>
                    </div>
                    <div className='w-full flex items-center justify-center flex-col'>
                        <h2 className='text-[20px] font-semibold text-white'>Music Player</h2>
                    </div>
                </div>


                {/**2nd project */}
                <div className='w-[250px] h-[300px] bg-transparent border-2  border-gray-400  mt-[5%]  rounded-lg p-1'>
                    <div  className='h-[80%] w-full rounded-lg'>
                        <img src={calculator} alt="" className='w-full h-[100%] object-cover rounded-lg'/>
                    </div>
                    <div className='w-full flex items-center justify-center flex-col'>
                        <h2 className='text-[20px] font-semibold text-white'>Calculator</h2>
                    </div>
                </div>
                {/**3rd Project */}

                <div className='w-[250px] h-[300px]  bg-transparent border-2  border-gray-400 mt-[10%] rounded-lg p-1'>
                    <div className='h-[80%] w-full rounded-lg '>
                        <img src={portfolio} alt="" className='w-full h-[100%] object-cover rounded-lg' />
                    </div>
                    <div>
                        <h2 className='text-[20px] font-semibold text-white'>Portfolio</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
