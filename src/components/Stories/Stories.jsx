import React from 'react';
import { Container } from 'react-bootstrap';
import Post from '../Story/Story';
import { StackContainer } from './Stories.styled';


const Stories = () => {
    return (
        <Container style={{ paddingTop : '5%', paddingBottom: '5%'}}>
           <StackContainer  gap={3}>
                <Post />
                <Post />
                <Post />
                <Post />
            </StackContainer>
        </Container>
    );
};

export default Stories;