  
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
{/* <Link to="/home" className="link">HOme</Link> */}

export class NavBar extends Component {

  render() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <LinkContainer to="/home">
    <Navbar.Brand >
      Café en la noriega
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <LinkContainer to="/about">
        <Nav.Link >
          About
        </Nav.Link>
          </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    );
  }

}