import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import Loading from 'react-simple-loading';
import { getStory } from '../../api/api';
import { convertTime } from '../../utils/convertTime';
import { CardBodyStyled } from './Story.styled';


const Story = ({ storyId }) => {
    //creation of state variable to store story.
    const[story, setStory] = useState({});

    useEffect(() => {
       //retrieve individual story.
      getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    
    //using ternary operator to check if story avaliable otherwise show loading component.
    return story && story.url ? (  
       <CardBodyStyled>
        <Card.Header style={{backgroundImage: 'linear-gradient(#FF5F6D, #FFC371)', borderBottom: 'none'}} as="h5">Score : {story.score}</Card.Header>
        <Card.Body>
        <Card.Title>{story.title}</Card.Title>
        <Card.Subtitle><b>by</b> {story.by}</Card.Subtitle>
        <Card.Text><b>Posted:</b> {convertTime(story.time)}</Card.Text>
        <Button variant="outline-primary" href={story.url}>View Post</Button>
        </Card.Body>
      </CardBodyStyled>  
    ) : <Loading />
};

export default Story;