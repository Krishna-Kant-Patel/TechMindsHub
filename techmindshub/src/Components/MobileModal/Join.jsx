import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';

function MydModalWithGrid(props) {
 
console.log(props.signlog);
  return (
    <Modal className='kl' {...props} width={700} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <p className="para">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        <div className="container">
          <div className="create">
            {props.signlog ? <>
              <input className='logininput' type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <button className="craccount">Log in</button>
            </>:<><h2>Create Account</h2>
            <div className="username">
              <input type="text" placeholder='First Name' />
              <input placeholder='Last Name' type="text" />
            </div>
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='Confirm Password' />
            <button className="craccount">Create Account</button></>}
            
            <button className="social" style={{marginTop:'20'}}><img style={{marginRight:'20'}} width="20" height="20" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/> Google</button>
            <button className="social" ><img style={{marginRight:'20'}} width="20" height="20" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/> Facebook</button>
          
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

function Join() {
  const [modalShow, setModalShow] = useState(false);
  const [signlog, setLog] = useState(true);
 

  return (
    <>
      <p style={{cursor: 'pointer' }} onClick={() => setModalShow(true)}>
        + Join Group
      </p>

      <MydModalWithGrid show={modalShow} signlog={signlog} toggle={()=>setLog(!signlog)} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Join;