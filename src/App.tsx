import React, { useState } from 'react';
import './App.css';
import LotteryBall from './Components/LotteryBalls';

const App: React.FC = () => {
  const initialNumbers: number[] = [5, 11, 16, 23, 32];
  const [numbers, setNumbers] = useState<number[]>(initialNumbers);

  const generateRandomNumbers = () => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 5) {
      const randomNum = Math.floor(Math.random() * 32) + 5;
      if (!newNumbers.includes(randomNum)) {
        newNumbers.push(randomNum);
      }
    }
    newNumbers.sort((a, b) => a - b);
    setNumbers(newNumbers);
  };

  return (
    <div className="App">
      <div className="lottery-container">
        {numbers.map((num, index) => (
          <LotteryBall key={index} number={num} />
        ))}
      </div>
      <button className="new-numbers-btn" onClick={generateRandomNumbers}>
        New numbers
      </button>
    </div>
  );
};

export default App;
