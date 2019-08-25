import * as React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const InputBox = styled.input`
  display: block;
  margin: auto;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  outline: 0;
  width: 90%;
  margin-top: 20px;
`;

const InputText = styled.textarea`
  display: block;
  margin: auto;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  outline: 0;
  width: 90%;
  margin-top: 20px;
  height: 100px;
`;

const SaveButton = styled.button`
  display: block;
  margin: auto;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  outline: 0;
  width: 90%;
  margin-top: 20px;
  background: inherit;
  color: white;
`;

const Count = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  line-height: 40px;
  margin-top: 20px;
`;

const IconWrapper = styled.div`
  display: inline-flex;
`

const Icon = styled(FontAwesomeIcon)`
  width: 20px;
  font-size: 25px;
`;

const CounterInput = styled.input`
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  margin: 0 5px;
  outline: 0;
  width: 40px;
  text-align: center;
`;

interface BookFormProps {
    name: string;
    author: string;
    count: number;
    description: string;
    updateField: Function;
    onSubmit: Function;
}


const BookForm:React.FunctionComponent<BookFormProps> = ({updateField, onSubmit, ...book}) => {
    
    const formSubmitAction = (e) => {
      e.preventDefault();
      onSubmit();
    }
    
    return (
      <form onSubmit={formSubmitAction}>
        <InputBox
          type="text"
          placeholder="Book Title"
          value={book.name}
          required
          onChange={e => updateField("name", e.target.value)}
        />
        <InputBox
          type="text"
          placeholder="Book Author"
          value={book.author}
          required
          onChange={e => updateField("author", e.target.value)}
        />
        <Count>
          <IconWrapper onClick={() => updateField("count", book.count + 1)}>
            <Icon icon={faPlusCircle} />
          </IconWrapper>
          <CounterInput
            value={book.count}
            onChange={e =>
              updateField(
                "count",
                isNaN(Number(e.target.value))
                  ? book.count
                  : Number(e.target.value)
              )
            }
          />
          <IconWrapper onClick={() => updateField("count", book.count - 1)}>
            <Icon icon={faMinusCircle} />
          </IconWrapper>
        </Count>
        <InputText
          placeholder="Book Description"
          value={book.description}
          onChange={e => updateField("description", e.target.value)}
        />
        <SaveButton type="submit">Save</SaveButton>
      </form>
    );
}


export default BookForm;