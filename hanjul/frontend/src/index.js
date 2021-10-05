import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import configStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
