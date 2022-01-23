import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavItems, StyledLink } from './Navigation.styled';
import Logo from '../Logo/Logo'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="#home">
        <Logo alt="hackernewslogo"/>
      </Navbar.Brand>
          <NavItems>
            <StyledLink exact  to="/">stories</StyledLink>
            <StyledLink to="/ask">ask</StyledLink>
            <StyledLink to="/comments">comments</StyledLink>
            <StyledLink to="/show">show</StyledLink>
            <StyledLink to="/jobs">jobs</StyledLink>
            <StyledLink to="/submit">submit</StyledLink>
          </NavItems>
        </Container>
      </Navbar>
    );
};

export default Navigation;