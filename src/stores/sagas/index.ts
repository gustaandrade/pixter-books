import { put, call, takeLatest, all } from "redux-saga/effects";

import { GetBooksApi } from "../../services";
import { getBooksFromJson } from "../../helpers";

import { ActionTypes } from "../actions/types";

function* loadBooksSaga() {
  const jsonResponse = yield call(GetBooksApi);
  yield put({
    type: ActionTypes.SAVE_BOOKS,
    books: getBooksFromJson(jsonResponse)
  });
}

export default function* rootSaga() {
  yield all([takeLatest(ActionTypes.LOAD_BOOKS, loadBooksSaga)]);
}
