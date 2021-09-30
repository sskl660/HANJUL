const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers; // 여러 reducer를 결합

// actions
const GET_USER = 'GET_USER'
const getUser = () => {
  return {
    type: GET_USER
  }
}

// reducers
const userState = {
  User: {
    name: 'kihoon'
  }
}

const userReducer = (state=userState, action) => {
  switch(action.type){
    case GET_USER:
      return {
        ...state,
        user: state.User
      }
    default: return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  // view: viewReducer,
})

// store

// store.subscribe(() => {
//   console.log('user =>', store.getState())
// })
const store = createStore(rootReducer, applyMiddleware(logger));


store.dispatch(getUser());