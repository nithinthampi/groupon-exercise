import * as React from "react";
import styled from "@emotion/styled";
import Book from "./book_read_edit";

const CardContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
  color: white;
`;

interface BookProps {
  id: number;
  name: string;
  author: string;
  count: number;
  description: string;
}

interface AppProps {
  books: BookProps[];
}

const BookList: React.FunctionComponent<AppProps> = ({ books }) => {
  return (
    <CardContainer>
      {books.map(book => {
        return <Book {...book} key={book.id} />;
      })}
    </CardContainer>
  );
};

export default BookList;
