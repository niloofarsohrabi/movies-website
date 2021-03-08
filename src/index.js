import React from 'react';
import ReactDOM from 'react-dom';
import {RouterHandler} from './router/index'
import { Provider } from 'react-redux'
import { store } from './stateManagment/store/store'
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BasicConfig } from './basicConfig';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BasicConfig/>
      <RouterHandler />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
