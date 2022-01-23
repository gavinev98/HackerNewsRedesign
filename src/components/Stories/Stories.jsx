import React, { useState, useEffect, memo } from 'react';
import { getNewStoryIds, getTopStoryIds } from '../../api/api';
import { Container } from 'react-bootstrap';
import Story from '../Story/Story';
import { StackContainer } from './Stories.styled';
import Filter from '../Filter/Filter';
import { useInfiniteScrolling } from '../../hooks/useInfiniteScrolling';


const Stories = () => {
    const { items } = useInfiniteScrolling();
    const[storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getNewStoryIds().then(data => setStoryIds(data));
    }, [items]);

    return (
        <Container style={{ paddingTop : '3%', paddingBottom: '5%'}}>
            <Filter handleNew={() => getNewStoryIds().then(data => setStoryIds(data))} handleTop={() => getTopStoryIds().then(data => setStoryIds(data))} />
           <StackContainer  gap={3}>
               {storyIds.slice(0, items).map(storyId =>(
                    <Story key={storyId} storyId={storyId} />                   
               ))}
            </StackContainer>
        </Container>
    );
};

export default Stories;