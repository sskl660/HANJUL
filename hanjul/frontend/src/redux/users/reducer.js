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
      return {
        ...state,
        user: action.user
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
      return {
        ...state,
        user: state.user
      }
    default: return state;
  }
}
export default userReducer