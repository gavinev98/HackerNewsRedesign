import React from 'react';
import { getTopStoryIds } from '../../api/api';

const TopStories = () => {
      //creation of state variable to store newStory Ids.
      const [topStoryIds, setTopStoryIds] = useState([]);

      useEffect(() => {
        //retrieve data from promise and set state of topStoryIds.
        getTopStoryIds().then(data => setTopStoryIds(data));
    }, []);

    
    return (
        <div>
            
        </div>
    );
};

export default TopStories;