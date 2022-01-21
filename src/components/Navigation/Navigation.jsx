import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavItems } from './Navigation.styled';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Navigation = () => {



    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavItems>
            <Link to="/">new</Link>

          </NavItems>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;