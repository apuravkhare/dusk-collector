"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { menuItems } from './MenuItems';

function TopNavBar( { swiperInstance }: { swiperInstance: any } ) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary top-0 z-50" sticky="top">
      <Container>
        <Navbar.Brand onClick={() => swiperInstance?.slideTo(0, 800)}>
          <span className="text-2xl font-bold text-black dark:text-zinc-50">
            <img src="/Dusk Collector Cutout.svg" width="30" height="30" className="d-inline-block align-top me-2" />
            Dusk Collector
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            {menuItems.map((item, index) => (
              // +1 on the index because the first slide is the video page, which is not in the menuItems array
              <Nav.Link key={index} onClick={() => swiperInstance?.slideTo(index + 1, 800)}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;