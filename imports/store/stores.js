import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery, all } from "redux-saga/effects";

import { helloSaga, isLogin } from "../saga/loginSaga";
import { getVideos } from "../saga/videosSaga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(function*() {
  yield all([helloSaga(),isLogin(), getVideos()]);
});

export default store;
