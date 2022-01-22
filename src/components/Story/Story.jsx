import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { getStory } from '../../api/api';
import { CardBodyStyled } from './Story.styled';


const Story = ({ storyId }) => {
    //creation of state variable to store story.
    const[story, setStory] = useState({});

    useEffect(() => {
       //retrieve individual story.
      getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    
    //check if there is a story.
    return story && story.url ? (  
       <CardBodyStyled>
        <Card.Header style={{backgroundImage: 'linear-gradient(#FF5F6D, #FFC371)', borderBottom: 'none'}} as="h5">Score : {story.score}</Card.Header>
        <Card.Body>
        <Card.Title>{story.title}</Card.Title>
        <Card.Subtitle>by {story.by}</Card.Subtitle>
        <Card.Text>Posted :{story.time}</Card.Text>
        <Button variant="outline-primary" href={story.url}>View Post</Button>
        </Card.Body>
      </CardBodyStyled>  
    ) : <p>There are no stories here.</p>
};

export default Story;