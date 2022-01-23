import React, { useEffect, useState } from 'react';
import { STORIES, MAX_STORIES } from '../Constants/index';

const useInfiniteScrolling = () => {
    const[loading, setLoading] = useState(false);
    const[items, setItems] = useState(STORIES);
    
    const handleScroll = () => {
      if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
         return false; 
      }
        setLoading(true);
    };
};

export default useInfiniteScrolling;