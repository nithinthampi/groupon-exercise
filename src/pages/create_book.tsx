import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import CreateBookTest from "../components/book_create";

const CreateBook: React.FunctionComponent<RouteComponentProps> = ({
  navigate
}) => {
  return <CreateBookTest navigate={navigate} />;
};

export default CreateBook;
