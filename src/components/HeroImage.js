import React from 'react'
import './componentStyles/HeroImage.css'
import IntroImg from '../assets/intro-img.jpg'
import { Link } from 'react-router-dom'

const HeroImage = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='intro' />
      </div>
      <div className='content'>
        <p>HI, I'M ALEX MUTANE</p>
        <h1>React Develoer.</h1>
        <div>
          <Link to='/project' className='btn'>Projects</Link>
          <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
