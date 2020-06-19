import { Book } from "../../types";

export interface BookListProps {
  books: Book[];
  loading: boolean;

  loadBooks: () => void;
  loadMoreBooks: (index: number) => void;
  setLoading: () => void;
}
