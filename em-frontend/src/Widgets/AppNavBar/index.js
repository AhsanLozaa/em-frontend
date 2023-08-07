import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const AppNavBar = ({ role }) => {
  return (
    <Navbar bg="light" expand="lg" className="px-4 py-2">
      <Navbar.Brand href="#">Your Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#">{role}</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Services</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavBar;
