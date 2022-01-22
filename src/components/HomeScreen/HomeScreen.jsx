import React, {useEffect, useState} from 'react';
import { getNewStoryIds } from '../../api/api';
import { Container } from 'react-bootstrap';
import Posts from '../Posts/Posts';


const HomeScreen = () => {

    //creation of state variable to store newStory Ids.
    const [newStoryIds, setNewStoryIds] = useState([]);

    
    useEffect(() => {
     
      },[]);


    return (
        <Container fluid>
              <h1 style={{textAlign : 'center', paddingTop: '2%'}}>Todays Posts</h1>
              <Posts />
        </Container>
    );
};

export default HomeScreen;