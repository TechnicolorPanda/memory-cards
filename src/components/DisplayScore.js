import React from 'react';
import '../styles/displayScore.css';

const DisplayPictures = (props) => {

  const { 
    currentScore,
    highScore,
  } = props;

  return (

    <div class = 'content'>
      <div class = 'row' id = 'scoreBar'>
        <p id = 'current-score'>Score = {currentScore}</p>
        <p id = 'high-score'>High Score = {highScore}</p>
      </div>
    </div>
  );
}

export default DisplayPictures;