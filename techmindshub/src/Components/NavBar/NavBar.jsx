import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Modallog from '../Modal/Modal';
import Join from '../MobileModal/Join';

function NavBar() {
  return (
    <>
    <div className="mobilebar">
      <button className="arrow"><img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-left.png" alt="long-arrow-left"/></button>
      <button className="join"><Join/></button>
    </div>
    <div className="media">
    <Navbar   className="navbar d-flex justify-content-around" >
      <Container>
        <Navbar.Brand href="#home">ATG,W
        <img width={25} height={25} className='logo' src="https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689644.jpg?w=740&t=st=1702492980~exp=1702493580~hmac=1792ddb8dc73d8a39e4837dfe915fe1ceb12fc5782238fa404866b607e8e1d3d" />RLD</Navbar.Brand>
        
        
        <Navbar.Toggle />

        
        <NavbarCollapse className=' search justify-content-center'>
        <div className="justify-content-center searchcontainer" >
        <button className='Searchbtn'><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1A1A1A/search--v1.png" alt="search--v1"/></button>
        <input type="text" className="search" placeholder='Search' />
        </div>

        </NavbarCollapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Create account: <Modallog/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  );
}

export default NavBar;