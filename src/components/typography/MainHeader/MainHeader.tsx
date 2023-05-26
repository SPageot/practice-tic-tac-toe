import styled from "styled-components";

const Header = styled("h1")`
  color: #fff;
  font-size: 7rem;
`;

const MainHeader = ({ value }: { value: string | boolean }) => {
  return <Header>{value}</Header>;
};

export default MainHeader;
