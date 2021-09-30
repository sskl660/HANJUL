import { LOGIN, LOGOUT, GET_USER } from "./types"

export const login = () => {
  return {
    type: LOGIN
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