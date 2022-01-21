import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavItems, StyledLink } from './Navigation.styled';
import Logo from '../Logo/Logo';
import { deepOrange } from '@mui/material/colors';

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
            <StyledLink to="/">news</StyledLink>
            <StyledLink to="/ask">ask</StyledLink>
          </NavItems>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;