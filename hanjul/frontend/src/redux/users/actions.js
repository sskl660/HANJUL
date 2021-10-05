import { LOGIN, LOGOUT, GET_USER } from "./types"

export const login = (user) => {
  return {
    type: LOGIN,
    user,
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const getUser = () => {
  return {
    type: GET_USER
  }
}