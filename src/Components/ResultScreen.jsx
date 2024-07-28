// src/components/ResultScreen.js
import React from 'react';
import '../Styles/App.css';

function ResultScreen({ reactionTime, setStage }) {
  return (
    <div className="App">
      <h1>결과</h1>
      <p>당신의 반응 시간: {reactionTime}ms</p>
      <button onClick={() => setStage('start')}>다시 하기</button>
    </div>
  );
}

export default ResultScreen;
