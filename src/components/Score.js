import React, { useState, useEffect } from 'react';
import DisplayScore from './DisplayScore';

const Score = (props) => {

  const { 
    currentScore,
  } = props;

const [highScore, setHighScore] = useState(0);

console.log(currentScore);
    
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