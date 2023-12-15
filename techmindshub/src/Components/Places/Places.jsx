import React from 'react'
import './style.css'
function Places({log}) {
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
      {log ? <><div className="recommend">
        <h5><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/facebook-like--v1.png" alt="facebook-like--v1"/>RECOMMENDED GROUPS</h5>
        <div className="people">
          <div className="profiledetail">
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" className="Rprofile" />
          <p>krishna
            </p></div><button className="follow">Follow</button>
            </div>
        <div className="people">
          <div className="profiledetail">
            <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="" className="Rprofile" />
          <p>Nitin
            </p></div><button className="follow">Follow</button>
            </div>
        <div className="people">
          <div className="profiledetail">
            <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="" className="Rprofile" />
          <p>Rohit
            </p></div><button className="follow">Follow</button>
            </div>
        <div className="people">
          <div className="profiledetail">
            <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="" className="Rprofile" />
          <p>Virat
            </p></div><button className="follow">Follow</button>
            </div>
            <a href="" className="seemore">See more...</a>
      </div></>:null}
      
    </>
  )
}

export default Places
