import React from 'react'
import Footer from '../components/Footer'
import HeroForPages from '../components/HeroForPages'
import Navbar from '../components/Navbar'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroForPages heading='PROJECTS' text='Some of my most recent works' />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project
