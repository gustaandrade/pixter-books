import { Book } from "../../types";

export interface BookListProps {
  books: Book[];
  loading: boolean;

  loadBooks: () => void;
  setLoading: () => void;
}
