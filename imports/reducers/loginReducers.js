import { ON_LOGIN, GET_USER } from '../actionTypes/actionTypes'

const initialState = {
  user: null,
  credentials: {},
}

let newState

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_USERNAME_CHANGE':
      newState = Object.assign({}, state)
      newState.credentials['userName'] = action.value
      return newState
    case 'ON_PASSWORD_CHANGE':
      newState = Object.assign({}, state)
      newState.credentials.passWord = action.value
      return newState
    case ON_LOGIN:
      newState = Object.assign({}, state)
      if (action.user) {
        let user = action.user
        user.status = 'SUCCESS'
        newState.isLogedin = true

        newState.user = action.user
      } else newState.user = { status: 'FAILED' }
      return newState
    case GET_USER:
      return state
    default:
      return state
  }
}

export default loginReducers
