import { put, take, takeEvery, all, call } from 'redux-saga/effects'
import { ON_GET_VIDEOS, ON_STORE_VIDEO, ON_SUBMIT_COMMENT } from '../actionTypes/actionTypes'
import { fetchVideos, insertComment, fetchPDFS } from '../api/videos'

export function* getVideos() {
  while (true) {
    const action = yield take(ON_GET_VIDEOS)
    const videos = yield call(fetchVideos)
    yield put({ type: ON_STORE_VIDEO, videos })
  }
}

export function* submitComment() {
  while (true) {
    const action = yield take(ON_SUBMIT_COMMENT)
    yield call(insertComment, action)
  }
}

export function* getPDFS() {
  const action = yield take('GET_PDFS');
  const pdfs = yield call(fetchPDFS)
  yield put({ type: 'ON_STORE_PDF', pdfs })
}