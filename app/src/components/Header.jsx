import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
            <Nav.Link as={Link} to="/similar">Similar reads</Nav.Link>
            <Nav.Link as={Link} to="/others">Others liked</Nav.Link>
          </Nav>
          <Navbar.Text>
            Check repo: <Link to="https://github.com/Nobhendu/book-recommender" target="_blank">Nobhendu Chowdhury</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;