import { useState } from "react";
import styled from "styled-components";
import Square from "../Square/Square";

const BoardContainer = styled("section")`
  height: 450px;
  width: 450px;
  display: flex;
  flex-wrap: wrap;
`;

const Board = () => {
  const [squares, setSquares] = useState<Array<string>>(Array(9).fill(null));
  const [isX, setIsX] = useState<boolean>(false);

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

    return false;
  };

  const handleSquareClick = (i: number) => {
    if (squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = !isX ? "X" : "O";
    setIsX(!isX);
    setSquares(newSquares);

    const result = calculatingWinner();

    return console.log(result);
  };

  return (
    <BoardContainer>
      {squares.map((_, i: number) => {
        return (
          <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => handleSquareClick(i)}
          />
        );
      })}
    </BoardContainer>
  );
};

export default Board;
