import React, { useState, useEffect } from 'react';
import { getNewStoryIds, getTopStoryIds } from '../../api/api';
import { Container } from 'react-bootstrap';
import Story from '../Story/Story';
import { StackContainer } from './Stories.styled';
import Filter from '../Filter/Filter';



const Stories = () => {

    const[storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getNewStoryIds().then(data => setStoryIds(data));
    }, []);


    return (
        <Container style={{ paddingTop : '5%', paddingBottom: '5%'}}>
            <Filter handleNew={() => getNewStoryIds().then(data => setStoryIds(data))} handleTop={() => getTopStoryIds().then(data => setStoryIds(data))} />
           <StackContainer  gap={3}>
               {storyIds.map(storyId =>(
                    <Story key={storyId} storyId={storyId} />                   
               ))}
            </StackContainer>
        </Container>
    );
};

export default Stories;