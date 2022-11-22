import React from 'react'
import './componentStyles/HeroForPages.css'

class HeroForPages extends React.Component {

  render() {
    return (
      <div className='heroimage'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }

}

export default HeroForPages
