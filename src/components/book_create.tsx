import * as React from "react";
import styled from "@emotion/styled";
import { createBook } from "../store/actions";
import { connect } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import BookForm from "./common/book_form";

const CardContainer = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
  max-width: 500px;
  height: 400px;
  box-sizing: border-box;
  border-radius: 10px;
  :nth-child(n) {
    background: #5271c2;
  }
  :nth-child(2n) {
    background: #35a541;
  }
  :nth-child(3n) {
    background: #bdb235;
  }
`;

const CardContent = styled.div`
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 2;
  overflow: hidden;
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 340px;
`;

interface BookProps {
  createBook: Function;
  navigate: RouteComponentProps["navigate"];
}

const Book: React.FunctionComponent<BookProps> = ({ createBook, navigate }) => {
  const [book, setBook] = React.useState({
    name: "",
    author: "",
    count: 0,
    description: ""
  });

  const onSave = () => {
    createBook({ ...book });
    navigate("/all");
  };

  const updateField = (fieldName: string, value: string | number) => {
    setBook({ ...book, [fieldName]: value });
  };

  return (
    <CardContainer>
      <CardContent>
        <BookForm {...book} onSubmit={onSave} updateField={updateField} />
      </CardContent>
    </CardContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createBook: payload => dispatch(createBook(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Book);
