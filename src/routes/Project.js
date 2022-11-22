import React from 'react'
import Footer from '../components/Footer'
import HeroForPages from '../components/HeroForPages'
import Navbar from '../components/Navbar'
import PricingCard from '../components/PricingCard'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroForPages heading='PROJECTS' text='Some of my most recent works' />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project
