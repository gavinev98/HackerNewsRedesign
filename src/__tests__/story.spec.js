import React from 'react';
import {render, cleanup, waitFor } from '@testing-library/react';
import Story from '../components/Story/Story';
import { singleStory } from '../fixtures';
import { getStory } from '../api/api';
