import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

export class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Nav.Link href="/">
          <Navbar.Brand>
            <Image src={'/logoCompleto.png'} fluid width="120px" />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/discord">Discord</Nav.Link>
            <Nav.Link href="/exactasJuega">Exactas juega</Nav.Link>
            <Nav.Link href="/nocheDeJuegos">Noche de juegos</Nav.Link>
            <Nav.Link href="/pabellonF">Pabellon F</Nav.Link>
            <Nav.Link href="/tournament">Torneos</Nav.Link>
            <Nav.Link href="/xplora">Xplora</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
