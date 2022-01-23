import axios from 'axios';
import { chooseFields } from '../utils/chooseFields';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const newStories = `${baseURL}newstories.json`;
export const topStories = `${baseURL}topstories.json`;
export const storyURL = `${baseURL}item/`;

export const getStory = async (storyID) => {
    try{
     const response = await axios.get(`${storyURL + storyID}.json`).then(({data}) => data && chooseFields((data)));
     return response;
    }catch(error) {
        console.log(error);
    }
}

export const getNewStoryIds = async () => {
    try {
    const response = await axios.get(newStories).then(({data}) => data);
    return response; 
    } catch(error) {
        console.log(error);
    } 
}

export const getTopStoryIds = async () => {
    try {
    const response = await axios.get(topStories).then(({data}) => data);
    return response; 
    } catch(error) {
        console.log(error);
    } 
}
