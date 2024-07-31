// src/components/WelcomeScreen.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to the Linux Learning Game</h1>
      <button 
        onClick={() => navigate('/dashboard')}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Start Game
      </button>
    </div>
  );
};

export default WelcomeScreen;
