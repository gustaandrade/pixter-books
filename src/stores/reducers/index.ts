import { StoreState } from "./types";
import { StoreActions, ActionTypes } from "../actions/types";

export const initialState: StoreState = {
  books: [],
  loading: false,
  selectedBook: null
};

const Reducer = (state = initialState, action: StoreActions): StoreState => {
  switch (action.type) {
    case ActionTypes.SAVE_BOOKS:
      return {
        ...state,
        books: action.books,
        loading: false
      };

    case ActionTypes.SAVE_MORE_BOOKS:
      return {
        ...state,
        books: state.books.concat(action.books),
        loading: false
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.SELECT_BOOK:
      return {
        ...state,
        selectedBook: action.book
      };

    default:
      return state;
  }
};

export default Reducer;
