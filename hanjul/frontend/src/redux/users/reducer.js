import { LOGIN, LOGOUT, GET_USER } from "./types"

const userState = {
  user: {
    userId: '1',
    userName: '1',
    userPw: '1'
  }
}

const userReducer = (state=userState, action) => {
  switch(action.type){
    case LOGIN:
      console.log("액션!!!"+action.user)
      state.user = action.user
      return {
        ...state,
        user: state.user
      }
    case LOGOUT:
      return {
        ...state,
        user: {
          name: '',
          id: ''
        }
      }
    case GET_USER:
      console.log("새로고침"+action.user)
      return {
        ...state,
        user: state.user
      }
    default: return state;
  }
}
export default userReducer