// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './components/Dashboard';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/level1" element={<Level1 />} />
      <Route path="/level2" element={<Level2 />} />
      <Route path="/level3" element={<Level3 />} />
    </Routes>
  </Router>
);

export default App;
