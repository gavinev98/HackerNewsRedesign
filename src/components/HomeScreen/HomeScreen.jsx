import React from 'react';
import { Container } from 'react-bootstrap';
import Posts from '../Posts/Posts';


const HomeScreen = () => {
    return (
        <Container fluid>
              <Posts />
        </Container>
    );
};

export default HomeScreen;