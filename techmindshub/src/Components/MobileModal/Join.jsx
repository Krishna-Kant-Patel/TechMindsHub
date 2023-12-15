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
              <input onChange={props.setfn} className='logininput' type="text" placeholder='User name' />
            <input onChange={props.setpass} className='logininput' type="text" placeholder='Password' />
            <button className="craccount" onClick={props.vailidation} >Log in</button>


            </>:<><h2>Create Account</h2>
            <div className="username">
              <input onChange={props.setfn} type="text" placeholder='First Name' />
              <input placeholder='Last Name' type="text" />
            </div>
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' onChange={props.setpass} />
            <input type="text" placeholder='Confirm Password' />
            <button className="craccount" onClick={props.setdetail} >Create Account</button></>}
            
            <button className="social" style={{marginTop:'20'}}><img style={{marginRight:'20'}} width="20" height="20" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/> Google</button>
            <button className="social" ><img style={{marginRight:'20'}} width="20" height="20" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/> Facebook</button>
          
          
          </div>
          
          
          <div className="image">
            <p className='signpara'>Already have an account? <a onClick={props.toggle}  >{props.signlog? 'Sign up' : 'Sign in'}</a></p>
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

function Join({appfn}) {
  const [modalShow, setModalShow] = useState(false);
  const [logout, setLogout] = useState(false);
  const [signlog, setLog] = useState(true);
  const [userdata, setData] = useState();
  const [userpass, setPass] = useState();
  const [userdetails, setDetails] = useState([{
    name: "krish",
    password:"123"
  }]);
 
  const details =()=>{
    setDetails([...userdetails,{name: userdata, password: userpass}])
    // console.log(userdetails);
    alert("Sign-up successfully")
  }

  function vailidation(){
    const valid = userdetails.filter((item)=>item.name===userdata && item.password===userpass)
      
    
    console.log(valid);
    if(valid.length>0){
      alert("succesful")
      setLogout(true);
      setModalShow(false)
      setData(valid[0].name)
      appfn();
    }
    else{
      alert("fail to login");
    }
  }
  

  return (
    <>
      
      {logout ? <>
      <div className="profilecontainer"><p onClick={()=>{
        appfn()
        setLogout(false);
      }}>LogOut</p>
      <h3 className='usernames' title='Click to Logout' ><img width="14" height="14" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1"/></h3></div>
      
     
      </>:<><p onClick={() => setModalShow(true)} >+Join group</p></>}

      <MydModalWithGrid
       show={modalShow}
       signlog={signlog}
       toggle={()=>setLog(!signlog)}
        onHide={() => setModalShow(false)}
        setfn={(e)=>setData(e.target.value)}
        setpass={(e)=>setPass(e.target.value)}
        setdetail={details}
        vailidation={vailidation}
         />
    </>
  );
}

export default Join;