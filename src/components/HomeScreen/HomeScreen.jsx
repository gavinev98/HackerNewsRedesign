import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Posts from '../Posts/Posts';


const HomeScreen = () => {
    return (
        <Container fluid>
              <h1 style={{textAlign : 'center', paddingTop: '2%'}}>Todays Posts</h1>
              <Posts />
              <Footer />
        </Container>
    );
};

export default HomeScreen;