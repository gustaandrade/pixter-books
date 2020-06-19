import { put, call, takeLatest, all } from "redux-saga/effects";

import { GetBooksApi, GetMoreBooksApi } from "../../services";
import { getBooksFromJson } from "../../helpers";

import { ActionTypes, LoadMoreBooksAction } from "../actions/types";

function* loadBooksSaga() {
  const jsonResponse = yield call(GetBooksApi);
  yield put({
    type: ActionTypes.SAVE_BOOKS,
    books: getBooksFromJson(jsonResponse)
  });
}

function* loadMoreBooksSaga(action: LoadMoreBooksAction) {
  const jsonResponse = yield call(GetMoreBooksApi, action.index);
  yield put({
    type: ActionTypes.SAVE_MORE_BOOKS,
    books: getBooksFromJson(jsonResponse)
  });
}

export default function* rootSaga() {
  yield all([
    takeLatest(ActionTypes.LOAD_BOOKS, loadBooksSaga),
    takeLatest(ActionTypes.LOAD_MORE_BOOKS, loadMoreBooksSaga)
  ]);
}
