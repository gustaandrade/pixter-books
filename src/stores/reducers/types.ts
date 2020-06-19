import { Book } from "../../types";

export interface StoreState {
  books: Book[];
  loading: boolean;
  selectedBook: Book | null;
}
