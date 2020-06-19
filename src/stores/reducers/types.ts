import { Book, NewsletterPayload } from "../../types";

export interface StoreState {
  books: Book[];
  loading: boolean;
  selectedBook: Book | null;
  newsletterPayload: NewsletterPayload | null;
}
