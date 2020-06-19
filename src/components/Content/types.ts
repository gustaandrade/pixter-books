import { Book } from "../../types";

export interface ContentProps {
  books: Book[];
  loading: boolean;

  loadBooks: () => void;
  setLoading: () => void;
}
