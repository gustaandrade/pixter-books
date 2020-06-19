import { Book } from "../../types";

export interface BookProps {
  book: Book;

  selectBook: (book: Book) => void;
}
