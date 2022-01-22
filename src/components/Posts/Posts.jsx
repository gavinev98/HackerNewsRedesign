import React from 'react';
import { Container } from 'react-bootstrap';
import Post from '../Post/Post';
import { StackContainer } from './Posts.styled';


const Posts = () => {
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

export default Posts;