import React from "react";
import { WonBanner } from "./WonBanner";
import { LostBanner } from "./LostBanner";

function EndGameBanner({ numberOfGuesses, isWon, answer }) {
  return isWon ? (
    <WonBanner numberOfGuesses={numberOfGuesses} />
  ) : (
    <LostBanner answer={answer} />
  );
}

export default EndGameBanner;
