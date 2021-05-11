import React, { useState, useEffect } from 'react';
import DisplayScore from './DisplayScore';
import '../styles/displayScore.css';

const Score = (props) => {

  const { 
    currentScore,
  } = props;

  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    } 
  }, [currentScore])

  return (
    <div>
      <DisplayScore
        currentScore = {currentScore}
        highScore = {highScore}
      />
    </div>
  )
} 

export default Score;