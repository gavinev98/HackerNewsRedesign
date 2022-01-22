import React from 'react';
import { Card } from 'react-bootstrap';
import { CardBodyStyled } from './Story.styled';


const Story = () => {
    return (  
       <CardBodyStyled>
        <Card.Header style={{backgroundImage: 'linear-gradient(#FF5F6D, #FFC371)', borderBottom: 'none'}} as="h5">70 Points</Card.Header>
        <Card.Body>
        <Card.Title>New front end framework released.</Card.Title>
        <Card.Subtitle>by user001</Card.Subtitle>
        <Card.Text>Posted : 4 hours ago</Card.Text>
        </Card.Body>
      </CardBodyStyled>  
    );
};

export default Story;