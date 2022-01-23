import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { getStory } from '../../api/api';
import { convertTime } from '../../utils/convertTime';
import { CardBodyStyled } from './Story.styled';


const Story = ({ storyId }) => {
    const[story, setStory] = useState({});

    useEffect(() => {
      getStory(storyId).then(data => data && data.url && setStory(data));
    }, [storyId]);

    return story && story.url ? (  
       <CardBodyStyled>
        <Card.Header style={{backgroundImage: 'linear-gradient(#FF5F6D, #FFC371)', borderBottom: 'none', borderRadius: 0}} as="h5">Score: {story.score}</Card.Header>
        <Card.Body>
        <Card.Title>{story.title}</Card.Title>
        <Card.Subtitle><b>By:</b> {story.by}</Card.Subtitle>
        <Card.Text><b>Posted:</b> {convertTime(story.time)}</Card.Text>
        <Button variant="outline-primary" href={story.url}>View Post</Button>
        </Card.Body>
      </CardBodyStyled>  
    ) : null
};

export default Story;