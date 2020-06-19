import { StoreActions, ActionTypes } from "./types";
import { Book } from "../../types";

export const loadBooks = (): StoreActions => ({
  type: ActionTypes.LOAD_BOOKS
});

export const saveBooks = (books: Book[]): StoreActions => ({
  type: ActionTypes.SAVE_BOOKS,
  books
});

export const setLoading = (): StoreActions => ({
  type: ActionTypes.SET_LOADING
});
