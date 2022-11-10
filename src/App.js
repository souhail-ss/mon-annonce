import { BrowserRouter, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav'

import Colle from './components/Colle'
import Home from './components/Home'
import Offer from './components/Offer'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/offer/offerId" element={<Offer />} />
        
        <Route path="/offers" element={<Colle/>} />
        

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
