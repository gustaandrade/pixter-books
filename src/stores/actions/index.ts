import { StoreActions, ActionTypes } from "./types";
import { Book } from "../../types";

export const loadBooks = (): StoreActions => ({
  type: ActionTypes.LOAD_BOOKS
});

export const saveBooks = (books: Book[]): StoreActions => ({
  type: ActionTypes.SAVE_BOOKS,
  books
});

export const loadMoreBooks = (index: number): StoreActions => ({
  type: ActionTypes.LOAD_MORE_BOOKS,
  index
});

export const saveMoreBooks = (books: Book[]): StoreActions => ({
  type: ActionTypes.SAVE_MORE_BOOKS,
  books
});

export const setLoading = (): StoreActions => ({
  type: ActionTypes.SET_LOADING
});

export const selectBook = (book: Book): StoreActions => ({
  type: ActionTypes.SELECT_BOOK,
  book
});
