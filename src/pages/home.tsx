import * as React from "react";
import styled from "@emotion/styled";
import Search from "../components/search_bar";
import { RouteComponentProps } from "@reach/router";
import LogoImg from "../assets/logo.png";
import {Link} from "@reach/router";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: auto;
  transform: translateY(-90px);
  > div{
      margin-top: 20px;
  }
`;

const Logo = styled("img")`
  cursor: pointer;
`;

const StyledLink = styled(Link)`
    height: 42px;
    padding: 7px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
    margin-top: 10px;
    background: blue;
    text-decoration: none;
    color: white;
    :hover {
        text-decoration: underline;
    }
`



const SearchPage: React.FunctionComponent<RouteComponentProps> = ({
  navigate
}) => {
  return (
    <Container>
      <Logo src={LogoImg} />
      <br />
      <br />
      <Search navigate={navigate} />
      <div>
        <StyledLink to="/all">All Books</StyledLink>
        <StyledLink to="/create">Create Book</StyledLink>
      </div>
    </Container>
  );
};

export default SearchPage;
