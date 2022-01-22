import React, {useEffect, useState} from 'react';
import { getNewStoryIds } from '../../api/api';
import { Container } from 'react-bootstrap';
import Stories from '../Stories/Stories';



const Feed = () => {

    //creation of state variable to store newStory Ids.
    const [newStoryIds, setNewStoryIds] = useState([]);

    //retrieve data from promise and set state of newStoryIds.
    useEffect(() => {
     getNewStoryIds().then(data => setNewStoryIds(data));
    },[]);


    return (
        <Container fluid>
              <h1 style={{textAlign : 'center', paddingTop: '2%'}}>Todays Posts</h1>
              <Stories />
        </Container>
    );
};

export default Feed;