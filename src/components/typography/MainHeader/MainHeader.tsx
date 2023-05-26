import styled from "styled-components";

const Header = styled("h1")`
  color: #fff;
  font-size: 7rem;

  @media (max-width: 550px) {
    font-size: 4rem;
  }

  @media (max-width: 350px) {
    font-size: 3rem;
  }
`;

const MainHeader = ({ value }: { value: string | boolean }) => {
  return <Header>{value}</Header>;
};

export default MainHeader;
