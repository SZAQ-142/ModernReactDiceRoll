import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(newNumber);
  };

  return (
    <div className="container">
      <h1>🎲 Dice Roll App 🎲</h1>
      <img
        id="diceImage"
        src={`dice${diceNumber}.png`}
        alt={`Dice Face ${diceNumber}`}
      />
      <p id="diceResult">You rolled: {diceNumber}</p>
      <button id="rollButton" onClick={rollDice}>
        Roll Dice
      </button>
    </div>
  );
};

export default App;
