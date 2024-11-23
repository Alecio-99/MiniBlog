
import './App.css';
 import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
 import Home from './pages/Home/Home';
 import Abaut from './pages/Abaut/Abaut';
import Navebar from './components/Navebar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navebar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abaut" element={<Abaut />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
