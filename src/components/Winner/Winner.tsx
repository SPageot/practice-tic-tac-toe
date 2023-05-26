import styled from "styled-components";
import AppButton from "../AppButton/AppButton";
import MainHeader from "../typography/MainHeader/MainHeader";

const WinnerContainer = styled("section")`
  min-height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Winner = ({
  winnerName,
  onClick,
}: {
  winnerName: string;
  onClick: () => void;
}) => {
  return (
    <WinnerContainer>
      <MainHeader value={winnerName} />
      <AppButton buttonName="Start Over" onClick={onClick} />
    </WinnerContainer>
  );
};

export default Winner;
