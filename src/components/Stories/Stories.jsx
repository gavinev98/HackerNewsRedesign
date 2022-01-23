import React, { useState, useEffect } from 'react';
import { getNewStoryIds, getTopStoryIds } from '../../api/api';
import { Button, Container } from 'react-bootstrap';
import Story from '../Story/Story';
import { StackContainer } from './Stories.styled';


const Stories = () => {

    const[storyIds, setStoryIds] = useState([]);

    useEffect(() => {
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