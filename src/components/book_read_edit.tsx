import * as React from "react";
import styled from "@emotion/styled";
import { updateBook } from "../store/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import BookForm from "./common/book_form";

type CardProps = {
  edit: boolean;
};

const CardContainer = styled.li`
  position: relative;
  height: 340px;

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
  width: 70%;
  margin: auto;
  margin-bottom: 10px;
  @media (min-width: 801px) {
    margin: 0 30px 30px 0;
    float: left;
    width: calc(100% * 0.3333 - 30px);
  }
`;

const CardContent = styled.div`
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transform: ${(props: CardProps) =>
    props.edit ? "rotateY(180deg)" : "rotateY(0deg)"};
  z-index: 2;
  overflow: hidden;
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 340px;
`;

const CardName = styled.p`
  font-size: 32px;
  line-height: 0.9;
  font-weight: 700;
`;

const Author = styled.span`
  font-size: 14px;
`;

const BookCount = styled.p`
  font-size: 100px;
  margin: 0 8px 0 0;
  font-weight: 700;
  text-shadow: #000 1px 8px 10px;
`;

const BookDescription = styled.p`
  height: 40px;
  padding: 0 5px;
  overflow: hidden;
`;

const EditButton = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

interface BookProps {
  id: number;
  name: string;
  author: string;
  count: number;
  description: string;
  edit: boolean;
  updateBook: Function;
}

const Book: React.FunctionComponent<BookProps> = ({
  children,
  updateBook,
  ...props
}) => {
  //Derive props from redux store and maintain a local state
  const [book, setBook] = React.useState(props);

  React.useEffect(() => {
    setBook(props);
  }, [props.edit]);

  const onSave = () => {
    updateBook({ ...book, edit: false });
  };

  const updateField = (fieldName: string, value: string | number) => {
    setBook({ ...book, [fieldName]: value });
  };

  const onEdit = () => {
    updateBook({ ...book, edit: true });
  };

  return (
    <CardContainer>
      <CardContent edit={book.edit}>
        <CardName>
          <Author>
            <span>{`${book.author}'s`}</span>
          </Author>
          <br />
          {book.name}
        </CardName>
        <BookCount>{book.count}</BookCount>
        <BookDescription>{book.description}</BookDescription>
        <EditButton onClick={onEdit}>
          <FontAwesomeIcon icon={faEdit} /> Edit
        </EditButton>
      </CardContent>
      <CardContent edit={!book.edit}>
        <BookForm {...book} updateField={updateField} onSubmit={onSave} />
      </CardContent>
    </CardContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateBook: payload => dispatch(updateBook(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Book);
