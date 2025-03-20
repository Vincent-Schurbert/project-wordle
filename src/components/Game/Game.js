import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessWord from "../GuessWord/GuessWord";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function addGuessToList(guessedWord) {
    const newGuessList = [...guessList, guessedWord];
    setGuessList(newGuessList);
  }

  return (
    <>
      <GuessList guessedWordList={guessList} />
      <GuessWord addGuessToList={addGuessToList} />
    </>
  );
}

export default Game;
