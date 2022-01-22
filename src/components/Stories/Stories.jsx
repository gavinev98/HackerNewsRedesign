import React, { useState, useEffect } from 'react';
import { getNewStoryIds, getStory } from '../../api/api';
import { Button, Container } from 'react-bootstrap';
import Story from '../Story/Story';
import { StackContainer } from './Stories.styled';


const Stories = () => {
    //creation of state variable to store newStory Ids.
    const [newStoryIds, setNewStoryIds] = useState([]);

    useEffect(() => {
        //retrieve data from promise and set state of newStoryIds.
        getNewStoryIds().then(data => setNewStoryIds(data));
    }, []);

    return (
        <Container style={{ paddingTop : '5%', paddingBottom: '5%'}}>
            <Button>Click Here</Button>
           <StackContainer  gap={3}>
               {newStoryIds.map(storyId =>(
                    <Story key={storyId} storyId={storyId} />                   
               ))}
            </StackContainer>
        </Container>
    );
};

export default Stories;