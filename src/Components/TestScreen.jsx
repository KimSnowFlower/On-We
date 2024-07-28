// src/components/TestScreen.js
import React, { useState, useEffect } from 'react';
import '../Styles/TestScreen.css';

function TestScreen({ setStage, setReactionTime }) {
  const [startTime, setStartTime] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const randomDelay = Math.floor(Math.random() * 5000) + 2000;
    const timer = setTimeout(() => {
      setStartTime(Date.now());
      setIsReady(true);
    }, randomDelay);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (isReady) {
      const endTime = Date.now();
      setReactionTime(endTime - startTime);
      setStage('result');
    }
  };

  return (
    <div className="test-container">
      <div 
        className={`test-block ${isReady ? 'ready' : ''}`} 
        onClick={handleClick}
      >
        <h1>{isReady ? '클릭하세요!' : '준비...'}</h1>
      </div>
    </div>
  );
}

export default TestScreen;
