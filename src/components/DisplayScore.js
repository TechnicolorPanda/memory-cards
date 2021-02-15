import React from 'react';
import '../styles/displayScore.css';

const DisplayPictures = (props) => {

  const { 
    currentScore,
    highScore,
  } = props;

  console.log('current score = ' + currentScore);
  console.log('high score = ' + highScore);

  // TODO: current score is correct but does not print on screen?

  return (
    <div className = 'content'>
      <div className = 'row' id = 'scoreBar'>
        <p id = 'current-score'>Score: {currentScore}</p>
        <p id = 'high-score'>High Score: {highScore}</p>
      </div>
    </div>
  );
}

export default DisplayPictures;