import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiBookShelfFill } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <RiBookShelfFill className='m-1' color='white' size='1.7em'/>
          Book Recommender
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/top">Top genres</Nav.Link>
            <NavDropdown title="Find books" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/recommend/similar">Similar reads</NavDropdown.Item>
              <NavDropdown.Item href="/recommend/others">Others liked</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text>
            Created by: <a href="mailto:nobhendu.chowdhury@research.iiit.ac.in">Nobhendu Chowdhury</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;