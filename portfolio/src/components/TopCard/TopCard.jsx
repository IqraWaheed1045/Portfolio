import React from 'react'
import './TopCard.css';

const TopCard = () => {
  return (
    <div className='w-full h-[60vh] bg-[#384B70]  py-4 px-4 flex items-center justify-center font-Ubuntu text-white z-20 shadow-xl topcard'>
      <div  className='w-[70%] h-[100%]  bg-transparent  flex items-center flex-col justify-center'>
       <h2 className='text-[40px] font-bold leading-10 font-Pacifico'>Awesome!</h2>
       <h3 className='text-[35px] font-bold font-Pacifico'>Frontend Web Developer</h3>
       <p className='mx-[10%] text-center'>Hey I am React js developer. I can craft and design single page,multipage Websites as well Landing Pages for you.</p>
      </div>
    </div>
  )
}

export default TopCard
