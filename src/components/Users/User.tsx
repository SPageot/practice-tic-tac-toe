import styled from "styled-components";

const UserContainer = styled("section")`
  height: 500px;
  width: 500px;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1500px) {
    height: 100px;
    width: 100%;
    flex-direction: row;
  }
`;

const UserName = styled("h2")`
  font-size: 2rem;
  color: #fff;
`;

const UserChoice = styled("h2")`
  font-size: 3rem;
  color: #fff;
`;

const User = ({ name, choice }: { name: string; choice: string }) => {
  return (
    <UserContainer>
      <UserName>{name}</UserName>
      <UserChoice>{choice}</UserChoice>
    </UserContainer>
  );
};

export default User;
