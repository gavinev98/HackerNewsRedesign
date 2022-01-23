import { Container } from 'react-bootstrap';
import Stories from '../Stories/Stories';


const Feed = () => {
    return (
        <Container fluid>
              <h1 style={{textAlign : 'center', paddingTop: '2%', fontWeight: '100'}}>Todays Posts</h1>
              <Stories />
        </Container>
    );
};

export default Feed;