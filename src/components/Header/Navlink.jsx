import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navlink.css";

const Navlink = () => {
  return (
    // <div>
    //     <NavLink to='/home'>Home</NavLink>
    //     <NavLink to='/about'>About</NavLink>
    //     <NavLink to='/service'>Service</NavLink>
    //     <NavLink to='/event'>Event</NavLink>
    //     {/* <NavLink to='/notfound'>Home</NavLink> */}

    // </div>
    <Navbar className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='text-uppercase fw-bolder' to="/home">Rythmo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="navlink" to="/home">
              Home
            </NavLink>
            <NavLink className="navlink" to="/about">
              About
            </NavLink>
            <NavLink className="navlink" to="/event">
              Event
            </NavLink>
            <NavLink className="navlink" to="/serviceDetail">
              Service
            </NavLink>
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navlink;
