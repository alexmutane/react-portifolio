import React from 'react'
import Footer from '../components/Footer'
import HeroForPages from '../components/HeroForPages'
import Navbar from '../components/Navbar'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroForPages heading='PROJECTS' text='Some of my most recent works' />
      <Footer />
    </div>
  )
}

export default Project
