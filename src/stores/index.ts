import { createStore, applyMiddleware, compose } from "redux";
import createSaga from "redux-saga";

import Sagas from "./sagas";
import Reducer from "./reducers";

const sagaMiddleware = createSaga();

const Store = createStore(Reducer, compose(applyMiddleware(sagaMiddleware)));

export default Store;

sagaMiddleware.run(Sagas);
