import React from 'react'
import './suggestion.css'

const Suggestion = ({picture, name}) => {
  return (
    <div className='suggestion_header'>
      <div className='suggestion_header__container'>
        <div className='suggestion_header__header'>
          <img src={picture} alt={name} className='suggestion_header__img' />
          <div className='suggestion_header__profile'>
            <p>{name}</p>
          </div>
          <p>Follow</p>
        </div>
      </div>
    </div>
  )
}

export default Suggestion