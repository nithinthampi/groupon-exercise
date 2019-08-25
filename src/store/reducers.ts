import { BooksState, BookActionTypes, UPDATE_BOOK, CREATE_BOOK } from "./types";


const initialState: BooksState = {
    books: [{
        id: 1,
        author: "Tony",
        description: "A book",
        name: "Neethu Thampi",
        count: 12,
        edit: false
    },
    {
        id: 2,
        author: "Tony",
        description: "A book",
        name: "Nithin Thampi",
        count: 12,
        edit:false
    },
    {
        id: 3,
        author: "Tony",
        description: "A book",
        name: "Nithin Thampi",
        count: 12,
        edit:false
    }]
}
export default (state = initialState, action: BookActionTypes): BooksState => {
    switch (action.type) {
        case UPDATE_BOOK: {
            return {
                books: state.books.map((book) => action.payload.id === book.id ? action.payload : book)
            }
        }
        case CREATE_BOOK: {
            const lastBook = state.books[state.books.length - 1];
            return {
                books: [...state.books, {id: lastBook.id + 1, ...action.payload, edit:false}]
            }
        }
        default: return state
    }

}