import { BooksState, BookActionTypes, UPDATE_BOOK, CREATE_BOOK } from "./types";


const initialState: BooksState = {
    books: [{
        id: 1,
        author: "Mario Puzo",
        description: "The deadliest lord of the Cosa Nostra. The Godfather.",
        name: "The Godfather",
        count: 12,
        edit: false
    },
    {
        id: 2,
        author: "John Grisham",
        description: "Sample description",
        name: "A time to kill",
        count: 19,
        edit:false
    },
    {
        id: 3,
        author: "Lee Harper",
        description: "Sample description",
        name: "Mockingbird",
        count: 1,
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