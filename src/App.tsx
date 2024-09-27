// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import HomePage from './pages/HomePage.tsx';
import ComingSoonPage from './pages/ComingSoonPage.tsx'
import Footer from './components/Footer.tsx';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ComingSoon" element={<ComingSoonPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
