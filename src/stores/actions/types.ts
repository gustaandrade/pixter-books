import { Book } from "../../types";

export enum ActionTypes {
  LOAD_BOOKS = "LOAD_BOOKS",
  SAVE_BOOKS = "SAVE_BOOKS",
  LOAD_MORE_BOOKS = "LOAD_MORE_BOOKS",
  SAVE_MORE_BOOKS = "SAVE_MORE_BOOKS",
  SET_LOADING = "SET_LOADING",
  SELECT_BOOK = "SELECT_BOOK"
}

export interface LoadBooksAction {
  type: ActionTypes.LOAD_BOOKS;
}

export interface SaveBooksAction {
  type: ActionTypes.SAVE_BOOKS;
  books: Book[];
}

export interface LoadMoreBooksAction {
  type: ActionTypes.LOAD_MORE_BOOKS;
  index: number;
}

export interface SaveMoreBooksAction {
  type: ActionTypes.SAVE_MORE_BOOKS;
  books: Book[];
}

export interface SetLoadingAction {
  type: ActionTypes.SET_LOADING;
}

export interface SelectBookAction {
  type: ActionTypes.SELECT_BOOK;
  book: Book;
}

export type StoreActions =
  | LoadBooksAction
  | SaveBooksAction
  | LoadMoreBooksAction
  | SaveMoreBooksAction
  | SetLoadingAction
  | SelectBookAction;
