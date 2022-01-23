import axios from 'axios';
import { getNewStoryIds, getStory, newStories, storyURL } from '../api/api';
import { singleStory, storyIds, emptyStory } from '../fixtures';

jest.mock('axios');


describe('HackerNews API', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('getStory function', () => {
        it('requests a single story from the Hacker News api', async () => {
            axios.get.mockImplementation(() =>
              Promise.resolve({ data: singleStory })
        );

    const entity = await getStory(123);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${storyURL + 123}.json`);
    expect(entity).toEqual(singleStory);

    });
    
    it('does not retrieve a story from the api', async () => {
        axios.get.mockImplementation(() =>
          Promise.resolve({ data: emptyStory })    
    );

    const entity = await getStory(123);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${storyURL + 123}.json`);
    expect(entity).toEqual(emptyStory);
    
    });

    });

    describe('getStoryIds function', () => {
    it('requests and retrieves story ids from hacker news api', async () => {
        axios.get.mockImplementation(() => Promise.resolve({ data : storyIds}));

        const entity = await getNewStoryIds();
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(newStories);
        expect(entity).toEqual(storyIds);

    });
 });
});