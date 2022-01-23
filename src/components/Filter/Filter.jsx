import React from 'react';
import { Filters } from './Filter.styled';

const Filter = (props) => {
    return (
        <div>
        <Filters onClick={props.handleNew}>New Posts</Filters>
        <Filters onClick={props.handleTop}>Top Posts</Filters>
        </div>
    );
};

export default Filter;