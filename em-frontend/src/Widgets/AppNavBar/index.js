import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const AppNavBar = ({ role }) => {
  return (
    <Navbar bg="light" expand="lg" className="px-4 py-2">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#">{role}</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavBar;
