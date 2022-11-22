import React from 'react'
import Footer from '../components/Footer'
import HeroForPages from '../components/HeroForPages'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroForPages heading='ABOUT' text='I am an excellent React web developer' />
      <Footer />
    </div>
  )
}

export default About
