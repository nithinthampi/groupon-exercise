import * as React from "react";
import { connect } from "react-redux";
import BookList from "../components/book_list";
import { RouteComponentProps } from "@reach/router";
import Header from "../components/header";

interface BookProps {
  id: number;
  name: string;
  author: string;
  count: number;
  description: string;
}

interface AllBooksProps {
  books: BookProps[];
  navigate: RouteComponentProps["navigate"]
}

const AllBooks: React.FunctionComponent<AllBooksProps> = ({ books, navigate }) => {
  return <div>
      <Header navigate={navigate} />
      <BookList books={books} />
      </div>
};

const mapStateToProps = ({ books }) => {
  return { books };
};

export default connect(mapStateToProps)(AllBooks);
