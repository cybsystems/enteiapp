import { put, take, takeEvery, all, call } from "redux-saga/effects";
import { ON_GET_VIDEOS, ON_STORE_VIDEO } from "../actionTypes/actionTypes";
import { fetchVideos } from "../api/videos";

export function* getVideos() {
  while (true) {
    const action = yield take(ON_GET_VIDEOS);
    const videos = yield call(fetchVideos);
     
    yield put({ type: ON_STORE_VIDEO,  videos });
  }
}
