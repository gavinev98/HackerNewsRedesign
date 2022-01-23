import React from 'react';
import {render, cleanup, waitForElement } from '@testing-library/react';
import { getStory, getNewStoryIds } from '../api/api';
import { storyIds, singleStory } from '../fixtures/index';
import { useInfiniteScrolling } from '../hooks/useInfiniteScrolling';
import { STORIES } from '../constants';


