import React, { useState } from "react";
import "./TicTacToe.css";

// PUBLIC_INTERFACE
function TicTacToe() {
  // Board state: 9 cells (null, "X", or "O")
  const [board, setBoard] = useState(Array(9).fill(null));
  // Player: true = X, false = O
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("playing");

  // Check for a winner or draw
  function calculateWinner(bd) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (bd[a] && bd[a] === bd[b] && bd[a] === bd[c]) {
        return bd[a]; // "X" or "O"
      }
    }
    return null;
  }

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(cell => cell);

  // Update board on cell click
  function handleCellClick(idx) {
    if (status !== "playing" || board[idx]) return;
    const nextBoard = board.slice();
    nextBoard[idx] = xIsNext ? "X" : "O";
    setBoard(nextBoard);

    const gameWinner = calculateWinner(nextBoard);
    if (gameWinner) {
      setStatus("won");
    } else if (nextBoard.every(cell => cell)) {
      setStatus("draw");
    } else {
      setXIsNext(!xIsNext);
    }
  }

  function handleRestart() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setStatus("playing");
  }

  // Display logic for the info area
  let infoText;
  if (winner) {
    infoText = (
      <span className="ttt-winner">
        {winner === "X" ? "Player 1 (X)" : "Player 2 (O)"} wins!
      </span>
    );
  } else if (isDraw) {
    infoText = <span className="ttt-draw">It's a draw!</span>;
  } else {
    infoText = (
      <span className="ttt-turn">
        Turn: {xIsNext ? <b>Player 1 (X)</b> : <b>Player 2 (O)</b>}
      </span>
    );
  }

  return (
    <div className="ttt-container">
      <div className="ttt-info">{infoText}</div>
      <div className="ttt-board">
        {board.map((cell, idx) => (
          <button
            key={idx}
            className="ttt-cell"
            onClick={() => handleCellClick(idx)}
            disabled={!!board[idx] || status !== "playing"}
            aria-label={`Cell ${idx + 1}: ${cell ? cell : "empty"}`}
          >
            {cell}
          </button>
        ))}
      </div>
      <button className="ttt-reset-btn" onClick={handleRestart}>
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
