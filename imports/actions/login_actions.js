import { ON_IS_LOGIN, ON_LOGIN, GET_USER } from "../actionTypes/actionTypes";

export const onIsLogin = (username, password) => ({
  type: ON_IS_LOGIN,
  username: username,
  password: password
});

export const onLogin=(user)=>({type:ON_LOGIN,user})

export const getUser=()=>({type:GET_USER})