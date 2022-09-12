import './css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/striimi' element={<Stream />} />
          <Route path='/ohjelma' element={<Schedule />} />
          <Route path='/yhteystiedot' element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
