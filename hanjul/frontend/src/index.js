import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
// import store from './redux/store';
import configStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { createStore } from "redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducers";
// import { BrowserRouter } from 'react-router-dom';

const { store, persistor } = configStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
