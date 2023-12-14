import React from 'react'
import './style.css'
function Places() {
  return (
    <>
      <div className="place">
      <div className="ldg">
      <img src="https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-png-0.png" alt="" className="placelog" />
        <input className='placeinput' type="text" placeholder='Enter Your Location' />
        <button className='mark'> ╳ </button>
        
      </div>
      <p className="warning">
        Your location will help us serve better and extend a personalised experience.
        </p>
      </div>
    </>
  )
}

export default Places
