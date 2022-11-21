import './componentStyles/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navLinks = [
    { id: '1', route: '/', navText: 'Home' },
    { id: '2', route: '/project', navText: 'Project' },
    { id: '3', route: '/about', navText: 'About' },
    { id: '4', route: '/contact', navText: 'Contact' },
  ]

  const [navclick, setNavclick] = useState(false);
  const handleClick = () => setNavclick(!navclick);

  const [headercolor, setHeadercolor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 100 ? setHeadercolor(true) : setHeadercolor(false);
  }

  window.addEventListener('scroll', changeColor);

  const barIcon = <FaBars size={20} style={{ color: '#fff' }} />;
  const closeIcon = <FaTimes size={20} style={{ color: '#fff' }} />;

  return (
    <div className={headercolor ? 'header header-bg' : 'header'}>
      <Link to='/'>
        <h1>Portifolio</h1>
      </Link>

      <ul className={navclick ? 'nav-menu active' : 'nav-menu'}>
        {navLinks.map(nav => {
          return (
            <li key={nav.id}>
              <Link to={nav.route}>{nav.navText}</Link>
            </li>
          )
        })}
      </ul>
      <div className='humburger' onClick={handleClick}>
        {
          navclick ? closeIcon : barIcon
        }
      </div>
    </div>
  )
}

export default Navbar
