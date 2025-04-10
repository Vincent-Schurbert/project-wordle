import React from "react";

function Keyboard({ wordlist }) {
  console.log(wordlist);
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  function handleColorByLetter(letter) {
    if (wordlist.length === 0) {
      return "gray";
    }

    const allLetters = wordlist.flat();

    const matchingLetters = allLetters.filter((l) => l.letter === letter);

    if (matchingLetters.some((l) => l.status === "correct")) {
      return "hsl(150deg 70% 30%)";
    } else if (matchingLetters.some((l) => l.status === "misplaced")) {
      return "#hsl(50deg 100% 30%)";
    } else if (matchingLetters.some((l) => l.status === "incorrect")) {
      return "hsl(0deg 0% 50%)";
    } else {
      return "hsl(0deg 0% 90%)";
    }
  }

  return (
    <div>
      {rows.map((row, idx) => (
        <div className="keyboard-row" key={idx}>
          {row.map((k) => (
            <span
              className="key"
              key={k}
              style={{ backgroundColor: handleColorByLetter(k) }}
            >
              {k}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
