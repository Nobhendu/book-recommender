import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiBookShelfFill } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <RiBookShelfFill className='m-1' color='white' size='1.7em'/>
          Book Recommender
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/top">Top genres</Nav.Link>
            <Nav.Link as={Link} to="/recommend/similar">Similar reads</Nav.Link>
            <Nav.Link as={Link} to="/recommend/others">Others liked</Nav.Link>
          </Nav>
          <Navbar.Text>
            Created by: <Link to="mailto:nobhendu.chowdhury@research.iiit.ac.in">Nobhendu Chowdhury</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;