import {
    CREATE_BOOK,
    UPDATE_BOOK,
    BookActionTypes,
    UpdateBookPayload,
    CreateBookPayload
} from "./types";

export const updateBook = (payload: UpdateBookPayload): BookActionTypes => {
    return {
        type: UPDATE_BOOK,
        payload
    };
};

export const createBook = (payload: CreateBookPayload): BookActionTypes => {
    return {
        type: CREATE_BOOK,
        payload
    };
};
