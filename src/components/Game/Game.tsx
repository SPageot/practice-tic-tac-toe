import { useEffect, useState } from "react";
import styled from "styled-components";
import AppButton from "../AppButton/AppButton";
import Board from "../Board/Board";
import MainHeader from "../typography/MainHeader/MainHeader";
import User from "../Users/User";

const GameContainer = styled("section")`
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  @media(max-width: 1500px){
    flex-direction: column;
  }
`;

const GameOverContainer = styled("div")`
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Game = ({
  players,
}: {
  players: { playerOne: string; playerTwo: string };
}) => {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  );
  const [isX, setIsX] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | boolean>(false);

  const handleSquareClick = (i: number) => {
    if (squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = !isX ? "X" : "O";
    setIsX(!isX);
    setSquares(newSquares);
  };

  useEffect(() => {
    const calculatingWinner = () => {
      const winningResults = [
        [0, 1, 2],
        [0, 3, 6],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const resultCheck of winningResults) {
        if (
          squares[resultCheck[0]] === "X" &&
          squares[resultCheck[1]] === "X" &&
          squares[resultCheck[2]] === "X"
        ) {
          return "X is the Winner!";
        } else if (
          squares[resultCheck[0]] === "O" &&
          squares[resultCheck[1]] === "O" &&
          squares[resultCheck[2]] === "O"
        ) {
          return "O is the Winner";
        }
      }

      if (!squares.includes(null)) {
        setWinner("DRAW");
      }

      return false;
    };
    const result = calculatingWinner();
    if (result) {
      setWinner(result);
    }
  }, [squares]);
  return (
    <GameContainer>
      {winner ? (
        <GameOverContainer>
          <MainHeader value={winner} />
          <AppButton
            buttonName="Play Again"
            onClick={() => {
              setWinner(false);
              setSquares(Array(9).fill(null));
              setIsX(false);
            }}
          />
        </GameOverContainer>
      ) : null}
      <User name={players.playerOne} choice="X" />
      <Board
        squares={squares}
        winner={winner}
        onSquareClick={handleSquareClick}
      />
      <User name={players.playerTwo} choice="O" />
    </GameContainer>
  );
};

export default Game;
