import { SET_RECOMMEND, GET_RECOMMEND, REMOVE_RECOMMEND } from "./types"

const recommendState = {
  recommend: {
    hanjul: "",
    books: []
  }
}

const recommendReducer = (state=recommendState, action) => {
  switch(action.type){
    case SET_RECOMMEND:
      return {
        ...state,
        recommend: action.recommend
      }
    case REMOVE_RECOMMEND:
      return {
        ...state,
        recommend: {
          hanjul: "",
          books: []
        }
      }
    case GET_RECOMMEND:
      return {
        ...state,
        recommend: state.recommend
      }
    default: return state;
  }
}
export default recommendReducer