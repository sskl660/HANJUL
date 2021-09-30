import { LOGIN, LOGOUT, GET_USER } from "./types"

const userState = {
  user: {
    name: '',
    id: '',
  }
}

const userReducer = (state=userState, action) => {
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        user: {
          name: '기훈',
          id: 'kihoon'
        }
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