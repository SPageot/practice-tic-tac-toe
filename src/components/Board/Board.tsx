import styled from "styled-components";
import Square from "../Square/Square";

const BoardContainer = styled("section")`
  height: 450px;
  width: 450px;
  display: flex;
  flex-wrap: wrap;
`;

const Board = ({
  squares,
  winner,
  onSquareClick,
}: {
  squares: (string | null)[];
  winner: string | boolean;
  onSquareClick: (i: number) => void;
}) => {
  return (
    <BoardContainer>
      {squares?.map((_: string | null, i: number) => {
        return (
          <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => (winner ? null : onSquareClick(i))}
          />
        );
      })}
    </BoardContainer>
  );
};

export default Board;
