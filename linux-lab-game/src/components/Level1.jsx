// src/components/Level1.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Terminal from './Terminal';

const tasks = [
  {
    description: "Navigate to the `/home/user` directory.",
    steps: [["cd /home/user"]]
  },
  {
    description: "List the contents of the `/home/user` directory.",
    steps: [["ls"], ["ls -la"], ["ls -l"], ["ls -lh"], ["ls -a"]]
  },
  {
    description: "Create a file named `practice.txt` and move it to the `/home/user/documents` directory.",
    steps: [
      ["touch practice.txt", "mv practice.txt /home/user/documents"],
      ["touch practice.txt && mv practice.txt /home/user/documents"]
    ]
  },
  {
    description: "View the contents of `notes.txt` in the `/home/user/documents` directory.",
    steps: [
      ["cd /home/user/documents", "cat notes.txt"],
      ["cat /home/user/documents/notes.txt"]
    ]
  },
  {
    description: "Create a directory named `projects` in `/home/user` and navigate into it.",
    steps: [
      ["mkdir /home/user/projects", "cd /home/user/projects"],
      ["mkdir /home/user/projects && cd /home/user/projects"]
    ]
  },
  {
    description: "Copy `notes.txt` from `/home/user/documents` to `/home/user/projects`.",
    steps: [
      ["cp /home/user/documents/notes.txt /home/user/projects"],
      ["cd /home/user/documents", "cp notes.txt /home/user/projects"]
    ]
  },
  {
    description: "Remove the `practice.txt` file from the `/home/user/documents` directory.",
    steps: [["rm /home/user/documents/practice.txt"]]
  },
  {
    description: "Move the `projects` directory to `/home/user/workspace`.",
    steps: [
      ["mv /home/user/projects /home/user/workspace"],
      ["mkdir /home/user/workspace", "mv /home/user/projects /home/user/workspace"]
    ]
  },
];

const Level1 = () => {
  const navigate = useNavigate();
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSolutions, setShowSolutions] = useState(false);

  useEffect(() => {
    if (currentTaskIndex === tasks.length) {
      setShowSolutions(true);
    }
  }, [currentTaskIndex]);

  const handleComplete = () => {
    if (currentTaskIndex + 1 < tasks.length) {
      setCurrentTaskIndex(currentTaskIndex + 1);
      setScore(score + 10);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
      <h1 className="text-5xl font-extrabold mb-8">Level 1: Linux Basics</h1>
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 mb-6">
        <p className="text-lg font-semibold">{tasks[currentTaskIndex].description}</p>
      </div>
    
      <Terminal task={tasks[currentTaskIndex]} onComplete={handleComplete} />
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 mt-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">Score: {score}</div>
          <div className="w-3/4 bg-gray-700 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${(currentTaskIndex / tasks.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      {showSolutions && (
        <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 mt-6">
          <h2 className="text-3xl font-bold mb-4">Solutions</h2>
          {tasks.map((task, index) => (
            <div key={index} className="mb-6">
              <p className="text-lg font-semibold mb-2">{task.description}</p>
              <ul className="list-disc list-inside ml-4">
                {task.steps.map((step, i) => (
                  <li key={i} className="text-sm text-gray-300">{step.join(' && ')}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Level1;