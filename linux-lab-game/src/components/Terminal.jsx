import React, { useState, useEffect, useRef } from 'react';

const Terminal = ({ task, onComplete }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    const updatedHistory = [...history, trimmedInput];
    setHistory(updatedHistory);

    const currentCommands = task.steps;
    const isCorrect = currentCommands.some(commands => 
      commands.every((command, index) => updatedHistory[updatedHistory.length - commands.length + index] === command)
    );

    if (isCorrect) {
      setIsComplete(true);
      setTimeout(() => {
        setIsComplete(false);
        onComplete();
      }, 1000);
    }

    setInput('');
  };

  return (
    <div className="w-full max-w-3xl bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
      <div className="text-green-500 mb-4 h-64 overflow-y-auto terminal-window p-2 bg-black rounded-lg" ref={terminalRef}>
        {history.map((line, index) => (
          <div key={index} className="flex">
            <span className="pr-2 text-green-300">$</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
      {isComplete && <div className="text-green-500 mb-4 text-center text-xl font-semibold">Task Completed!</div>}
      <form onSubmit={handleInputSubmit}>
        <div className="flex">
          <span className="pr-2 text-green-300">$</span>
          <input
            type="text"
            className="w-full bg-gray-800 text-green-500 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={input}
            onChange={handleInputChange}
            autoFocus
          />
        </div>
      </form>
    </div>
  );
};

export default Terminal;
