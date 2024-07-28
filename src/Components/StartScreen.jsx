// src/components/StartScreen.js
import React from 'react';
import '../styles/App.css';

function StartScreen({ setStage }) {
  return (
    <div className="App">
      <h1>반응 속도 테스트</h1>
      <button onClick={() => setStage('test')}>시작</button>
    </div>
  );
}

export default StartScreen;
