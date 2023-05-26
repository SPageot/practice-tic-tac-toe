import { useState } from "react";
import styled from "styled-components";
import Board from "../Board/Board";
import User from "../Users/User";

const GameContainer = styled("section")`
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Game = ({
  players,
}: {
  players: { playerOne: string; playerTwo: string };
}) => {
  return (
    <GameContainer>
      <User name={players.playerOne} choice="X" />
      <Board />
      <User name={players.playerTwo} choice="O" />
    </GameContainer>
  );
};

export default Game;
