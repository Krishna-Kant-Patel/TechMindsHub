import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './style.css'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Image from 'react-bootstrap/Image';


function NavBar() {
  return (
    <Navbar sticky="top" className="navbar d-flex justify-content-around" >
      <Container>
        <Navbar.Brand href="#home">ATG,W
        <img width={25} height={25} className='logo' src="https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689644.jpg?w=740&t=st=1702492980~exp=1702493580~hmac=1792ddb8dc73d8a39e4837dfe915fe1ceb12fc5782238fa404866b607e8e1d3d" />RLD</Navbar.Brand>
        
        
        {/* <Navbar.Toggle /> */}

        
        <NavbarCollapse className=' search justify-content-center'>
        <div className="justify-content-center" >
        <InputGroup className="sm" >
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control 
          
          placeholder="Search"
        />
      </InputGroup>
        </div>

        </NavbarCollapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Create account: <a href="#login">It's free</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;