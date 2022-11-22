import './componentStyles/Footer.css'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaHome, FaLinkedin, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const contactIconsStyle = { color: '#fff', marginRight: '2rem' };
  const socialIconsStyle = { color: '#fff', marginRight: '1rem' };
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={contactIconsStyle} />
            <div>
              <p>Maputo, Malhangalene. 162</p>
              <p>Mozambique</p>
            </div>
          </div>
          <div className='phone'>
            <p>
              <FaPhone size={20} style={contactIconsStyle} />
              +258 871 905 986
            </p>
          </div>
          <div className='email'>
            <p>
              <FaEnvelope size={20} style={contactIconsStyle} />
              alexmutane@gmail.com
            </p>
          </div>
        </div>
        <div className='right'>
          <h4>About me</h4>
          <p>
            Web & Mobile developer with experience in Angular, Ionic and now learning React.
            Good things are still to come in my career.
          </p>
          <div className='social'>
            <FaFacebook size={30} style={socialIconsStyle} />
            <FaLinkedin size={30} style={socialIconsStyle} />
            <FaGithub size={30} style={socialIconsStyle} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
