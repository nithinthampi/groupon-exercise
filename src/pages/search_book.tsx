import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import BookList from "../components/book_list";
import Header from "../components/header";

interface BookProps {
  id: number;
  name: string;
  author: string;
  count: number;
  description: string;
}

interface SearchBooksProps {
  books: BookProps[];
  filter?: string;
  navigate: RouteComponentProps["navigate"];
}

const AllBooks: React.FunctionComponent<SearchBooksProps> = ({
  books,
  filter,
  navigate
}) => {
  const filteredBooks = books.filter(book => {
    const { name, description, author } = book;
    return (
      name.toLowerCase().includes(filter) ||
      description.toLowerCase().includes(filter) ||
      author.toLowerCase().includes(filter)
    );
  });
  return (
    <div>
      <Header navigate={navigate} />
      <BookList books={filteredBooks} />;
    </div>
  );
};

const mapStateToProps = ({ books }) => {
  return { books };
};

export default connect(mapStateToProps)(AllBooks);
