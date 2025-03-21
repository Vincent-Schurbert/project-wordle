import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessWord from "../GuessWord/GuessWord";
import GuessList from "../GuessList/GuessList";
import { checkGuess } from "../../game-helpers";
import EndGameBanner from "../EndGameBanner/EndGameBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import RestartButton from "../RestartButton/RestartButton";

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameFinished, setGameFinished] = React.useState(false);
  const [isWon, setIsWon] = React.useState(false);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  console.log(answer);

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

  function handleRestart() {
    setGuessList([]);
    setGameFinished(false);
    setIsWon(false);

    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);

    console.log(newAnswer);
  }

  return (
    <>
      {gameFinished && <RestartButton handleRestartGame={handleRestart} />}
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
