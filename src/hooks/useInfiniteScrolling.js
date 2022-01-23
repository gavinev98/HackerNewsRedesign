/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { STORIES, MAX_STORIES } from '../Constants/index';

export const useInfiniteScrolling = () => {
    const[loading, setLoading] = useState(false);
    const[items, setItems] = useState(STORIES);
    
    const handleScroll = () => {
      if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
         return false; 
      }
        setLoading(true);
    };

    useEffect(() => {
        if(!loading) return;
  
        if(items + STORIES >= MAX_STORIES) {
          setItems(MAX_STORIES);
        } else {
          setItems(items + STORIES);
        }
        setLoading(false);
      }, [loading]);

    useEffect(() => {
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return { items };
};