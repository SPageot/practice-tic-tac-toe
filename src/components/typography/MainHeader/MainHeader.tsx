import styled from "styled-components";

const Header = styled("h1")`
  color: #fff;
  font-size: 7rem;

  @media (max-width: 790px) {
    font-size: 4rem;
  }

  @media (max-width: 450px) {
    font-size: 3rem;
  }

  @media (max-width: 330px) {
    font-size: 2rem;
  }
`;

const MainHeader = ({ value }: { value: string | boolean }) => {
  return <Header>{value}</Header>;
};

export default MainHeader;
