import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Logo from '../../assets/hackernewslogo.png';
import { NavItems } from './Navigation.styled';

const Navigation = () => {



    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">
        <img src={Logo} width="400" height="100" className="d-inline-block align-top" alt="hackernewslogo"/>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavItems>
            <Nav.Link href="#new">new</Nav.Link>
            <Nav.Link href="#past">past</Nav.Link>
            <Nav.Link href="#comments">comments</Nav.Link>
            <Nav.Link href="#ask">ask</Nav.Link>
            <Nav.Link href="#show">show</Nav.Link>
            <Nav.Link href="#jobs">jobs</Nav.Link>
            <Nav.Link href="#submit">submit</Nav.Link>
          </NavItems>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;