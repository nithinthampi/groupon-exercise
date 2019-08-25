export const UPDATE_BOOK = 'UPDATE_BOOK';
export const CREATE_BOOK = 'CREATE_BOOK';

export interface UpdateBookPayload {
    id: number
    name: string
    author: string
    count: number
    description: string,
    edit: boolean
};

export interface CreateBookPayload {
    name: string
    author: string
    count: number
    description: string
}

export interface BooksState {
    books: UpdateBookPayload[]
}



interface UpdateBookAction {
    type: typeof UPDATE_BOOK
    payload: UpdateBookPayload
}

interface CreateBookAction {
    type: typeof CREATE_BOOK
    payload: CreateBookPayload
}

export type BookActionTypes = UpdateBookAction | CreateBookAction;