import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from "redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducers";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* 만든 store를 앱 상위에 넣어줍니다. */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
