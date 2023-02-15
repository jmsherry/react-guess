import React, { useState } from "react";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const guesses = [1,2,3,4,5,6,7,8,9,10];

function EventButtons() {
  const [numberToGuess] = useState(() => {
    return getRandomIntInclusive(1, 10)
  });

  const [currentGuess, makeGuess] = useState(-1);

  if(currentGuess === numberToGuess) {
    return <p>You won! The number was {numberToGuess}</p>
  }
  

  return (
    <div>
      <h1>Guess the Number</h1>
      {guesses.map((n) => (<button onClick={() => makeGuess(n)}>{n}</button>))}
    </div>
  );
}

export default EventButtons;
