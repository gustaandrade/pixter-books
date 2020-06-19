import { Book } from "../../types";

export enum ActionTypes {
  LOAD_BOOKS = "LOAD_BOOKS",
  SAVE_BOOKS = "SAVE_BOOKS",
  SET_LOADING = "SET_LOADING"
}

export interface LoadBooksAction {
  type: ActionTypes.LOAD_BOOKS;
}

export interface SaveBooksAction {
  type: ActionTypes.SAVE_BOOKS;
  books: Book[];
}

export interface SetLoadingAction {
  type: ActionTypes.SET_LOADING;
}

export type StoreActions = LoadBooksAction | SaveBooksAction | SetLoadingAction;
