import axios from 'axios';
import { chooseFields } from '../utils/chooseFields';

//creating a base url to the hackerAPI website
export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
//creating newStories URL.
export const newStories = `${baseURL}newstories.json`;
//creating bestStories URL.
export const topStories = `${baseURL}topstories.json`;
//creating storyURL to retrieve individual stories.
export const storyURL = `${baseURL}item/`;


//retrieve individual stories.
export const getStory = async (storyID) => {
    try{
     const response = await axios.get(`${storyURL + storyID}.json`).then(({data}) => data && chooseFields((data)));
     return response;
    }catch(error) {
        console.log(error);
    }
}

//retrieve new story ids.  
export const getNewStoryIds = async () => {
    try {
    const response = await axios.get(newStories).then(({data}) => data);
    return response; 
    } catch(error) {
        console.log(error);
    } 
}

//retrieve top story ids.  
export const getTopStoryIds = async () => {
    try {
    const response = await axios.get(topStories).then(({data}) => data);
    return response; 
    } catch(error) {
        console.log(error);
    } 
}
