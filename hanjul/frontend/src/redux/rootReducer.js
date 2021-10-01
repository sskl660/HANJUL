import { combineReducers } from "redux";
import userReducer from "./users/reducer";

const rootReducer = combineReducers({
  users: userReducer,
  // view: viewReducer
})

export default rootReducer