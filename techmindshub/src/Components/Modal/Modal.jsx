import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';

function MydModalWithGrid(props) {
 
console.log(props.signlog);
  return (
    <Modal {...props} width={700} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <p className="para">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        <div className="container">
          <div className="create">
            {props.signlog ? <>
              <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <button className="craccount">Create Account</button>
            </>:<><h2>Create Account</h2>
            <div className="username">
              <input type="text" placeholder='First Name' />
              <input placeholder='Last Name' type="text" />
            </div>
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='Confirm Password' />
            <button className="craccount">Create Account</button></>}
            
            <button className="social" style={{marginTop:'20'}}>Google</button>
            <button className="social" >Facebook</button>
          
          </div>
          
          
          <div className="image">
            <p className='signpara'>Already have an account? <a onClick={props.toggle} href='#' >{props.signlog? 'Sign up' : 'Sign in'}</a></p>
            <img src="https://static.vecteezy.com/system/resources/previews/002/745/137/non_2x/create-account-illustration-vector.jpg" alt="" className="loginimage" />
             <p className='footerpara'>By signing up, you agree to our Terms & conditions, Privacy policy</p>           
          </div>

        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modallog() {
  const [modalShow, setModalShow] = useState(false);
  const [signlog, setLog] = useState(true);
 

  return (
    <>
      <a style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setModalShow(true)}>
        It's free
      </a>

      <MydModalWithGrid show={modalShow} signlog={signlog} toggle={()=>setLog(!signlog)} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Modallog;