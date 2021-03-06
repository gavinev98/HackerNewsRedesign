import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
       <Navigation />
        <Routes>
        <Route exact path="/" element={<Feed />}>
        </Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
