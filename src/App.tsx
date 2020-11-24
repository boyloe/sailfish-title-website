import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './assets/Logo/Black on Transparent.png'

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <Image src={Logo} alt='sailfish logo' fluid />            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#quote">Quote</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <Image src={Logo} alt='sailfish logo' fluid/>
        </Container>
        <Container>
      
        </Container>


      </Jumbotron>
    </div>
  );
}

export default App;
