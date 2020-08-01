  
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import { LinkContainer } from 'react-router-bootstrap';
import logoCompleto from '../assets/logoCompleto.png';
export class NavBar extends Component {

  render() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <LinkContainer to="/home">
    <Navbar.Brand >
      <Image src={logoCompleto} fluid width='120px'/>
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to= "/discord">
          <Nav.Link>
            Discord
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to= "/exactasJuega">
          <Nav.Link>
            Exactas juega
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to= "/nocheDeJuegos">
          <Nav.Link>
            Noche de juegos
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to= "/pabellonF">
          <Nav.Link>
            Pabellon F
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to= "/tournament">
          <Nav.Link>
            Torneos
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/xplora">
        <Nav.Link >
          Xplora
        </Nav.Link>
          </LinkContainer>
      </Nav>
      <Nav>
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