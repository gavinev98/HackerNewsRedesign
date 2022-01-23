import React from 'react';
import {render, cleanup, waitFor} from '@testing-library/react';
import Story from '../components/Story/Story';
import { singleStory } from '../fixtures';
import { getStory } from '../api/api';
import { wait } from '@testing-library/user-event/dist/utils';

beforeEach(cleanup);

jest.mock('../api/api', () => ({
    getStory : jest.fn(),
}));

test('renders story component with data', async () => {
    getStory.mockImplementation(() => Promise.resolve(singleStory));

    const{ getByText, getByTestId } = render(<Story storyId="1" />)

    await waitFor(() => [
        expect(getByTestId('story')).toBeTruthy(),
        expect(getByText('Charm – tools to make the command line glamorous')).toBeTruthy(),
        expect(getByTestId('story-creator').textContent).toEqual('By: Joe Bloggs'),
    ]);
});