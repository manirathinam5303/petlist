import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainscreen from './components/Mainscreen';
import PetsDetials from './components/PetsDetials';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainscreen />} />
        <Route path="/petDetails/:id" element={<PetsDetials />} />
      </Routes>
    </>
  );
}

export default App;
