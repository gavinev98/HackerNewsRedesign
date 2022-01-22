import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <Router>
    <div >
       <Navigation />
       <div>
        <Routes>
        <Route exact path="/" element={<HomeScreen />}>
        </Route>
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
