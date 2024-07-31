import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Terminal from './Terminal';

const tasks = [
  {
    description: "Change the permissions of `file.txt` to `rwxr-xr-x`.",
    steps: [["chmod 755 file.txt"]]
  },
  {
    description: "Change the owner of `file.txt` to `user`.",
    steps: [["chown user file.txt"]]
  },
  {
    description: "Change the group of `file.txt` to `staff`.",
    steps: [["chgrp staff file.txt"]]
  },
  {
    description: "View the permissions of `file.txt` to verify changes.",
    steps: [["ls -l file.txt"]]
  },
  {
    description: "Grant all permissions to the owner and read and execute permissions to others for `script.sh`.",
    steps: [["chmod 755 script.sh"]]
  },
  {
    description: "Revoke all permissions for others from `secret.txt`.",
    steps: [["chmod o-rwx secret.txt"]]
  },
  {
    description: "Grant write permission to the group for `notes.txt`.",
    steps: [["chmod g+w notes.txt"]]
  },
  {
    description: "Change the owner of the `/home/user/data` directory and its contents to `admin`.",
    steps: [["chown -R admin /home/user/data"]]
  },
];

const Level2 = () => {
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
      <h1 className="text-5xl font-extrabold mb-8">Level 2: File Permissions</h1>
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

export default Level2;