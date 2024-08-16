import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaGlobe, FaGift, FaUser, FaBars } from 'react-icons/fa';
import './MyNavbar.css';  // Importing the custom CSS file

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#" className="navbar-brand-custom ml-4"><img src="https://static.wixstatic.com/media/2d34e5_1e4b2c2047144b8484c6e78ad38dcb9d~mv2.jpg/v1/fill/w_161,h_66,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GOGAGA%20NEW%20LOGO%20FINAL-01.jpg" alt="logo"/></Navbar.Brand>
     
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-4 custom-nav">
          <Nav.Link href="#packages" className="nav-link-custom">Packages</Nav.Link>
          <Nav.Link href="#tours" className="nav-link-custom">Tours</Nav.Link>
          <Nav.Link href="#help" className="nav-link-custom">Help</Nav.Link>
          <Nav.Link href="#membership" className="nav-link-custom"><FaGlobe /> Membership</Nav.Link>
          <Nav.Link href="#giftcards" className="nav-link-custom"><FaGift /> Gift Cards</Nav.Link>
          <Nav.Link href="#profile" className="nav-link-custom"><FaBars /><FaUser /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
