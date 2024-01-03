import React, { useState, useEffect } from "react";
import Board from "../components/TicTacToeComponents/Board";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [vsComputer, setVsComputer] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [gamesAgainstComputer, setGamesAgainstComputer] = useState(0);
  const [winsAgainstComputer, setWinsAgainstComputer] = useState(0);

  const handleClick = (i) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const currentBoard = currentHistory[stepNumber];
    const squares = [...currentBoard];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setHistory([...currentHistory, squares]);
    setStepNumber(currentHistory.length);
    setXIsNext(!xIsNext);

    if (vsComputer && calculateWinner(squares) === "X") {
      setWinsAgainstComputer((prevWins) => prevWins + 1);
    }
  };

  const handleRestart = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
    setElapsedTime(0);

    if (vsComputer) {
      setGamesAgainstComputer((prevGames) => prevGames + 1);
    }
  };

  const handleComputerMove = (squares) => {
    const availableMoves = squares.reduce((acc, square, index) => {
      if (!square) {
        acc.push(index);
      }
      return acc;
    }, []);

    const randomMove =
      availableMoves[Math.floor(Math.random() * availableMoves.length)];

    if (randomMove !== undefined) {
      const newSquares = [...squares]; // Créez une nouvelle copie du tableau
      newSquares[randomMove] = xIsNext ? "X" : "O";
      setHistory((prevHistory) => [...prevHistory, newSquares]);
      setStepNumber((prevStep) => prevStep + 1);
      setXIsNext(!xIsNext);
    }
  };

  useEffect(() => {
    if (vsComputer && !xIsNext) {
      handleComputerMove(history[stepNumber]);
    }
  }, [vsComputer, xIsNext, history, stepNumber]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentBoard = history[stepNumber];
  const winner = calculateWinner(currentBoard);

  return (
    <div className="game">
      <div className="game-board">
        <h2 className="game-tic">Tic Tac Toe</h2>

        <div className="restart-computer-stat">
          <div className="restart-computer">
            <button type="button" onClick={handleRestart}>
              New Game
            </button>
            <label className="computer">
              VS computer
              <input
                type="checkbox"
                checked={vsComputer}
                onChange={() => setVsComputer(!vsComputer)}
              />
            </label>
          </div>
          <div className="stat">
            <div className="time">Time: {elapsedTime} sec</div>
            {vsComputer && (
              <div className="games-computer">
                Games VS Computer: {gamesAgainstComputer}
              </div>
            )}
            {vsComputer && (
              <div className="wins-computer">
                Wins VS Computer: {winsAgainstComputer}
              </div>
            )}
          </div>
        </div>

        <Board squares={currentBoard} onClick={(i) => handleClick(i)} />
      </div>

      <div>
        {winner ? (
          <span className="winner">Winner: {winner} !</span>
        ) : (
          <span className="next-player">
            Next player: {xIsNext ? "X" : "O"}
          </span>
        )}
      </div>
    </div>
  );
}

export default TicTacToe;
