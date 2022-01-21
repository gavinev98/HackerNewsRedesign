import React from 'react';
import { Container } from 'react-bootstrap';
import Post from '../Post/Post';
import { StyledStack } from './Posts.styled';


const Posts = () => {
    return (
        <Container style={{ paddingTop : '5%', paddingBottom: '5%'}}>
           <StyledStack  gap={3}>
                <Post />
                <Post />
                <Post />
                <Post />
            </StyledStack>
        </Container>
    );
};

export default Posts;