import React from 'react'
import { FaMobileButton } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Contect = () => {
    return (
        <>
            <div className='w-[90%] mx-auto text-center  lg:h-[80vh] h-[40vh]  py-4 px-4 bg-[#384B70] font-Ubuntu flex items-center flex-col'>
                <h2 className='text-[30px] font-bold text-white'>Contact</h2>
                <div className='flex justify-evenly items-center'>
                    <div className='w-full text-white flex-1 '>

                        <div className='my-2 flex gap-4 items-center'>
                            <FaMobileButton className='text-[30px]' />
                            <span className='text-[20px]'>0322-4710102</span>
                        </div>
                        <div className='my-2 flex gap-4 items-center'>
                            <IoMdMail className='text-[30px]' />
                            <span className='text-[20px]'>iqrawaheed1045@gmail.com</span>
                        </div>
                        <div className='my-2 flex gap-4 items-center'>
                            <FaLinkedin className='text-[30px]' />
                            <a
                                href=" https://www.linkedin.com/in/iqra-waheed-506455325/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700"
                            >
                                LinkedIn
                            </a>

                            {/* https://www.linkedin.com/in/iqra-waheed-506455325/ */}
                        </div>
                        <div className='my-2 flex gap-4 items-center'>
                            <IoLogoGithub className='text-[30px]' />
                            <a
                                href=" https://github.com/IqraWaheed1045"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700"
                            >
                                GitHub
                            </a>
                            {/* https://github.com/IqraWaheed1045 */}
                        </div>

                    </div>
                    <div className=' flex-1  mt-5'>

                        <form action="https://api.web3forms.com/submit" method='POST' className='flex flex-col items-center justify-center'>
                            <input type="hidden" name="access_key" value="d472553d-f63a-4598-a253-38f8c40d9dfb" />
                            <div className='flex gap-4 items-center my-1'>
                                {/* <label className='text-white'>Your Name</label> */}
                                <input className='px-2 py-1 rounded-lg' type="text" name='name' placeholder='Enter your name' required />
                            </div>
                            <div className='flex items-center gap-4 my-1'>

                            {/* <label>Phone Number</label> */}
                            <input className='px-2 py-1 rounded-lg' type="tel" name='phone' placeholder='Enetr your mobile no.' required />
                            </div>
                            <div className='flex items-center gap-4 my-1'>

                            {/* <label>Email</label> */}
                            <input className='px-2 py-1 rounded-lg' type="email" name="email" placeholder='Enter your Valid Email' required />
                            </div>
                            <div className='flex gap-4 items-center my-1'>
                            {/* <label >Write a message here</label> */}
                            <textarea className='px-2 py-1 rounded-lg' name="message" rows="7" placeholder='Enter your message' required></textarea>
                            </div>
                            <button type="submit" className='submit-btn my-3 border-2 border-gray-400 px-4 py-2 rounded-full'>Submit</button>
                        </form>

                    </div>
                </div>

            </div>
            <hr className='h-[2px] bg-gray-300 z-10' />
            <p className='w-full mx-auto text-center h-12 pt-4 mb-2 bg-[#384B70] text-white'>CopyWrite reserved @2024.Made by Iqra Waheed</p>
        </>
    )
}

export default Contect
