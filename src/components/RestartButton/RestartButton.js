import React from "react";

function RestartButton({ handleRestartGame }) {
  return (
    <button className="restart-button" onClick={handleRestartGame}>
      Restart
    </button>
  );
}

export default RestartButton;
