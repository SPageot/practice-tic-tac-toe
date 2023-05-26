import { useRef, useState } from "react";
import styled from "styled-components";
import Game from "./components/Game/Game";
import AppButton from "./components/AppButton/AppButton";
import MainHeader from "./components/typography/MainHeader/MainHeader";
import PlayerModal from "./components/PlayerModal/PlayerModal";

const AppContainer = styled("main")`
  height: 100vmin;
  background-color: #000080;
  position: relative;
`;

const WelcomeContainer = styled("section")`
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [startGame, setStartGame] = useState<boolean>(false);
  const playerOneRef = useRef();
  const playerTwoRef = useRef();
  const [playerNames, setPlayerNames] = useState<{
    playerOne: string;
    playerTwo: string;
  }>({
    playerOne: "",
    playerTwo: "",
  });

  const handlePlayerOne = () => {
    setPlayerNames({ ...playerNames, playerOne: playerOneRef.current?.value });
  };

  const handlePlayerTwo = () => {
    setPlayerNames({ ...playerNames, playerTwo: playerTwoRef.current?.value });
  };

  return (
    <AppContainer>
      {playerNames.playerOne && playerNames.playerTwo && startGame ? (
        <Game players={playerNames} />
      ) : (
        <WelcomeContainer>
          <MainHeader value="Tic Tac Toe" />
          <AppButton buttonName="Start" onClick={() => setStartGame(true)} />
        </WelcomeContainer>
      )}
      {startGame && !playerNames.playerOne && !playerNames.playerTwo ? (
        <PlayerModal
          playerRef={playerOneRef}
          playerNumber={"1"}
          onClick={handlePlayerOne}
        />
      ) : null}
      {startGame && playerNames.playerOne && !playerNames.playerTwo ? (
        <PlayerModal
          playerRef={playerTwoRef}
          playerNumber={"2"}
          onClick={handlePlayerTwo}
        />
      ) : null}
    </AppContainer>
  );
}

export default App;
