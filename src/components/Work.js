import React from 'react'
import './componentStyles/WorkCard.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {
          WorkCardData.map((value, index) => {
            return (
              <WorkCard key={index} imgsrc={value.imgsrc} title={value.t} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Work