import { put, takeEvery, call, all, take } from 'redux-saga/effects'
import { ON_IS_LOGIN, ON_LOGIN } from '../actionTypes/actionTypes'
import { checkLogin } from '../api/login'
import store from '../store/stores';
 
export function* helloSaga() {
 }

export function* isLogin() {
  while (true) {
    const { username, password } = yield take(ON_IS_LOGIN)
    const res = yield call(checkLogin, username, password)
    const user = res[0]
     
    yield put({ type: ON_LOGIN, user })


  }
}
