import axios from 'axios';

//creating a base url to the hackerAPI website
export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
//creating newStories URL.
export const newStories = `${baseURL}newstories.json`;
//creating bestStories URL.
export const topStories = `${baseURL}topstories.json`;
//creating storyURL to retrieve individual stories.
export const storyURL = `${baseURL}item.json`;


//using axios to retrieve newStory Ids.  
export const getNewStoryIds = async () => {
    try {
    const response = await axios.get(newStories).then(data => data);
        return response;
    } catch(error) {
        console.log(error);
    } 
}
