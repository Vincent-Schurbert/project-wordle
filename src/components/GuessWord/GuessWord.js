import React from "react";

function GuessWord({ addGuessToList }) {
  const [guessedWord, setGuessedWord] = React.useState("");

  function handleGuessWordSubmit(event) {
    event.preventDefault();

    addGuessToList(guessedWord);

    setGuessedWord("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleGuessWordSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guessedWord}
          pattern=".{5,5}"
          minLength={5}
          maxLength={5}
          onChange={(event) => setGuessedWord(event.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default GuessWord;
