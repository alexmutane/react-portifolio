import React from 'react'
import './componentStyles/WorkCard.css'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imagsrc} alt='projects information' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='project-details'>
        <p>{props.text}</p>
        <div className='project-btns'>
          <NavLink to={props.source} className='btn'>View</NavLink>
          <NavLink to='#' className='btn'>Source</NavLink>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
