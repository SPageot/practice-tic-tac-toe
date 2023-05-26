import styled from "styled-components";
import AppButton from "../AppButton/AppButton";

const ModalContainer = styled("section")`
  min-height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const PlayerModalContainer = styled("div")`
  width: 700px;
  height: 500px;
  background-color: #00b4d8;
  border-radius: 2rem;
  box-shadow: 0 0 15px #00b4d8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const PlayerName = styled("h2")`
  font-size: 3rem;
  color: #fff;
`;

const PlayerInput = styled("input")`
  height: 10%;
  width: 80%;
  border: none;
`;

const PlayerModal = ({
  playerNumber,
  onClick,
  playerRef,
}: {
  playerNumber: string;

  onClick: () => void;
  playerRef: unknown;
}) => {
  return (
    <ModalContainer>
      <PlayerModalContainer>
        <PlayerName>Player {playerNumber}</PlayerName>
        <PlayerInput ref={playerRef} />
        <AppButton buttonName="Submit" onClick={onClick} />
      </PlayerModalContainer>
    </ModalContainer>
  );
};

export default PlayerModal;
