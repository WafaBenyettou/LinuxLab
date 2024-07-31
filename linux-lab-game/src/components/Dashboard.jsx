// src/components/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';

const Dashboard = () => {
  const navigate = useNavigate();
  const { levels } = useStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-12">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {levels.map((level, index) => (
          <button 
            key={index} 
            onClick={() => navigate(`/level${index + 1}`)}
            className="px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            {level.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
