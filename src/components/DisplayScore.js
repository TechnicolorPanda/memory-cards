import React from 'react';
import '../styles/displayScore.css';

const DisplayScore = (props) => {

  const { 
    currentScore,
    highScore,
  } = props;

  return (
    <div className = 'content'>
      <div className = 'nav-bar' id = 'scoreBar'>
        <p id = 'current-score'>Score: {currentScore}</p>
        <p id = 'high-score'>High Score: {highScore}</p>
      </div>
    </div>
  );
}

export default DisplayScore;