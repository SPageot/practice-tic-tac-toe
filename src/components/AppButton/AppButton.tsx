import styled from "styled-components";

const Start = styled("button")`
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5rem;
  padding: 0 2em ;
  
`;

const AppButton = ({
  onClick,
  buttonName,
}: {
  onClick: () => void;
  buttonName: string;
}) => {
  return <Start onClick={onClick}>{buttonName}</Start>;
};

export default AppButton;
