// src/components/App.js
import React, { useState } from 'react';
import StartScreen from './StartScreen';
import TestScreen from './TestScreen';
import ResultScreen from './ResultScreen';
import '../Styles/App.css';

function App() {
  const [stage, setStage] = useState('start');
  const [reactionTime, setReactionTime] = useState(null);

  return (
    <div className="App">
      {stage === 'start' && <StartScreen setStage={setStage} />}
      {stage === 'test' && <TestScreen setStage={setStage} setReactionTime={setReactionTime} />}
      {stage === 'result' && <ResultScreen reactionTime={reactionTime} setStage={setStage} />}
    </div>
  );
}

export default App;
