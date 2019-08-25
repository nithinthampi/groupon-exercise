import * as React from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";

const SearchBox = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
`;
const SearchForm = styled.form`
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  flex: 1;
`;

const SearchInput = styled.input`
  font-size: 14px;
  border-width: 0;
  background: transparent;
  width: 90%;
  padding: 11px 0 12px 1em;
  color: #333;
  outline: none;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 42px;
  width: 80px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 42px;
  border-width: 0;
  background-color: blue;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
`;

const Search: React.FunctionComponent<RouteComponentProps> = props => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.navigate(`/search/${searchTerm.toLowerCase()}`);
  };

  return (
    <SearchBox>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchInput
          id="search-text"
          name="q"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
          }}
        />
        <SearchButton id="search-button" type="submit">
          <span>Search</span>
        </SearchButton>
      </SearchForm>
    </SearchBox>
  );
};

export default Search;
