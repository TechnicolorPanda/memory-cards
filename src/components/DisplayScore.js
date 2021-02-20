import React from 'react';
import '../styles/displayScore.css';

const DisplayScore = (props) => {

  const { 
    currentScore,
    highScore,
  } = props;

  console.log('high score = ' + highScore);
  console.log('display current score = ' + currentScore);

  // TODO: current score is correct but does not print on screen?

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