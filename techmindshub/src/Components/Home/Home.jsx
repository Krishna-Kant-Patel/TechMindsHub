import React from 'react';
import './style.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Home() {
  return (

    <>

      <div className="homeImage" >
        <div className="text">
          <h1>Computer Engineering</h1>
          <p>142,675 Computer Engineers follow this</p>
        </div>

      </div>
      <div className="tabs" >
        <div className="box">
          <div className="menu">All Posts(32)</div>
          <div className="menu">Article</div>
          <div className="menu">Events</div>
          <div className="menu">Education</div>
          <div className="menu">Jobs</div>
        </div>
        <div className="btns">
          <Dropdown data-bs-theme="dark" className="drop" >
            <Dropdown.Toggle variant="secondary">
              Write a Post
            </Dropdown.Toggle>
          </Dropdown>

          <button className="kk">+ Join Group</button>
        </div>
      </div>
      <div className="mobiletab">
        <button>All Post(320)</button>
        <select name="ksjdlfkjd" id="" disabled="disabled">
          <option value="">Filtter All</option>
          <option value="">Options</option>
          <option value="">Options</option>
          <option value="">Options</option>
        </select>
      </div>

    </>


  )
}

export default Home
