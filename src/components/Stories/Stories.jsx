import React, { useState, useEffect } from 'react';
import { getNewStoryIds, getTopStoryIds } from '../../api/api';
import { Button, Container } from 'react-bootstrap';
import Story from '../Story/Story';
import { StackContainer } from './Stories.styled';


const Stories = () => {
    //creation of state variable to store newStory Ids.
    const [storyIds, setStoryIds] = useState([]);
    //creation of state variable to store topPost Ids.
    const[topStoryIds, setTopStoryIds] = useState([]);

    
    useEffect(() => {
        //retrieve data from promise and set state of newStoryIds.
        getNewStoryIds().then(data => setStoryIds(data));
    }, []);



    return (
        <Container style={{ paddingTop : '5%', paddingBottom: '5%'}}>
            <Button onClick={() => getTopStoryIds().then(data => setStoryIds(data))}>Top Posts</Button>
            <Button onClick={() => getNewStoryIds().then(data => setStoryIds(data))}>New Posts</Button>
           <StackContainer  gap={3}>
               {storyIds.map(storyId =>(
                    <Story key={storyId} storyId={storyId} />                   
               ))}
            </StackContainer>
        </Container>
    );
};

export default Stories;