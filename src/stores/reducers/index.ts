import { StoreState } from "./types";
import { StoreActions, ActionTypes } from "../actions/types";

export const initialState: StoreState = {
  books: [],
  loading: false
};

const Reducer = (state = initialState, action: StoreActions): StoreState => {
  console.log(state.loading);

  switch (action.type) {
    case ActionTypes.SAVE_BOOKS:
      return {
        ...state,
        books: action.books,
        loading: false
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default Reducer;
