import React from 'react'
import TopCard from '../TopCard/TopCard'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contect from '../Contect/Contect'

const Portfolio = () => {
  return (
    <div className='bg-gray-300' >
      <TopCard/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contect/>
    </div>
  )
}

export default Portfolio
