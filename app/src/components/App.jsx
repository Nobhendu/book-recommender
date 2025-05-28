import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Container fluid>
          <Outlet></Outlet>
        </Container>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App