import React from 'react'
import portfolioimg from '../assets/portfolioimg.png'

const AboutMe = () => {
  return (
    <div className='mt-1 w-[90%] mx-auto text-center h-[60vh] bg-[#384B70]  py-4 px-4 flex items-center justify-center'>
      <div className='w-[70%] h-[100%]  flex gap-6 items-center font-Ubuntu justify-center px-4 bg-[#507687] shadow-xl z-30'>
        <div className='w-[150px] h-[150px] '>
          <img src={portfolioimg} alt="" className='w-full h-[100%] object-cover rounded-full' />
        </div>
        <div className='flex-1'>
          <h3 className='text-[40px] font-bold text-white'>About Me</h3>
          <ul  className='text-white'>
            <li className='list-disc'>Student of Software Engineering</li>
            <li className='list-disc'>Passionate Frontend Web Developer</li>
            <li className='list-disc'>Having Strong Knowledge about HTML,CSS with Frameworks,JS,React JS</li>
            <li className='list-disc'>Doing Internship at <span>CodeAlpha</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
