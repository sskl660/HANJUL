import { combineReducers } from "redux";
import userReducer from "./users/reducer";
import recommendReducer from "./recommend/reducer";

const rootReducer = combineReducers({
  users: userReducer,
  recommend: recommendReducer
})

export default rootReducer