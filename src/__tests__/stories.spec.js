import React from 'react';
import {render, cleanup, waitFor } from '@testing-library/react';
import { getStory, getNewStoryIds } from '../api/api';
import { storyIds, singleStory } from '../fixtures/index';
import { useInfiniteScrolling } from '../hooks/useInfiniteScrolling';
import { STORIES } from '../constants';
import Stories from '../components/Stories/Stories';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScrolling');

jest.mock('../api/api', () => ({
    getStory : jest.fn(),
    getNewStoryIds : jest.fn(),
}));

test('render the stories component with a story', async () => {
    useInfiniteScrolling.mockImplementation(() => ({
        count: STORIES,
    }));
    getStory.mockImplementation(() => Promise.resolve(singleStory));
    getNewStoryIds.mockImplementation(() => Promise.resolve(storyIds));

const { getByText, queryByTestId } = render(<Stories />);
await waitFor(() => [
    expect(getByText('Charm – tools to make the command line glamorous')).toBeTruthy(),
    expect(queryByTestId('story-creator').textContent).toEqual('By: Joe Bloggs'),
    ]);
});
