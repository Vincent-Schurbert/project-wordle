import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessWord from "../GuessWord/GuessWord";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessWorded, setGuessedWord] = useState("");

  return (
    <>
      <GuessWord guessedWord={guessWorded} setGuessedWord={setGuessedWord} />
    </>
  );
}

export default Game;
