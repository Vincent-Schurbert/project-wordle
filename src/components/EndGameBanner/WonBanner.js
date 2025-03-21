import React from "react";

export function WonBanner({ numberOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numberOfGuesses} guesses</strong>.
      </p>
    </div>
  );
}
