import React from 'react'
import './story.css'

const Story = ({picture, name}) => {
  return (
    <div className='story'>
      <div>
        <img src={picture} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Story