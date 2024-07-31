// src/components/Task.jsx
import React, { useState } from 'react';

const Task = ({ task, onComplete }) => {
  const [command, setCommand] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleCommandChange = (e) => {
    setCommand(e.target.value);
  };

  const handleCommandSubmit = () => {
    if (command === task.expectedCommand) {
      setFeedback('Correct!');
      onComplete();
    } else {
      setFeedback('Incorrect, try again.');
    }
  };

  return (
    <div className="task my-4 p-4 bg-gray-700 rounded shadow-lg">
      <p className="mb-2">{task.description}</p>
      <input 
        type="text" 
        value={command} 
        onChange={handleCommandChange} 
        className="p-2 mb-2 w-full bg-gray-800 text-white rounded"
      />
      <button 
        onClick={handleCommandSubmit} 
        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
      >
        Submit
      </button>
      {feedback && <p className="mt-2">{feedback}</p>}
    </div>
  );
};

export default Task;
