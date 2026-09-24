"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary top-0 z-50" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <span className="text-2xl font-bold text-black dark:text-zinc-50">
            <img src="/Dusk Collector Cutout.svg" width="30" height="30" className="d-inline-block align-top me-2" />
            Dusk Collector
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/music">Music</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/shows">Shows</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;