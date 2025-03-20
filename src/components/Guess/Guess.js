import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span className={`cell ${word ? word[num].status : null}`} key={num}>
          {word ? word[num].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
