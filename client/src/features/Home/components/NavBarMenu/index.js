import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarMenu() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shawdow justify-content-between">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill variant="tabs" className="mr-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/home"
            as={Link}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/user"
            as={Link}
          >
            User
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
        <Nav>
          <Nav.Link className="font-weight-bolder text-white" disabled>
            Hi Anh Em
          </Nav.Link>
          <Button variant="outline-primary" className="font-weight-bolder text-white">
            Logout
          </Button>
        </Nav>
    </Navbar>
  );
}

export default NavBarMenu;
