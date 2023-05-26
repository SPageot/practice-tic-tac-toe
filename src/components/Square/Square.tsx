import styled from "styled-components";

const SquareContainer = styled("section")`
  height: 150px;
  width: 150px;
  outline: #fff solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SquareChoice = styled("span")`
  color: #fff;
  font-size: 6rem;
`;

const Square = ({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) => {
  return (
    <SquareContainer onClick={onSquareClick}>
      <SquareChoice>{value}</SquareChoice>
    </SquareContainer>
  );
};

export default Square;
