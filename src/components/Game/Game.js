import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessWord from "../GuessWord/GuessWord";
import GuessList from "../GuessList/GuessList";
import { checkGuess } from "../../game-helpers";
import EndGameBanner from "../EndGameBanner/EndGameBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameFinished, setGameFinished] = React.useState(false);
  const [isWon, setIsWon] = React.useState(false);

  function addGuessToList(guessedWord) {
    const newGuess = checkGuess(guessedWord, answer);

    const incorrectLetters = newGuess.filter(
      (letter) => letter.status !== "correct"
    );

    if (incorrectLetters.length === 0) {
      setGameFinished(true);
      setIsWon(true);
    }

    const newGuessList = [...guessList, newGuess];

    if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameFinished(true);
    }

    setGuessList(newGuessList);
  }

  return (
    <>
      <GuessList guessedWordList={guessList} />
      <GuessWord addGuessToList={addGuessToList} />
      {gameFinished && (
        <EndGameBanner
          numberOfGuesses={guessList.length}
          answer={answer}
          isWon={isWon}
        />
      )}
    </>
  );
}

export default Game;
