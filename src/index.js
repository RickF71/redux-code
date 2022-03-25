import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import CounterReducer from './reducer/CounterReducer';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import FavoriteColor from './component/FavoriteColor';
import FavColorReducer from './reducer/FavColorReducer';
import MyLogger from './middleware/MyLogger';


const store = createStore(FavColorReducer, applyMiddleware(MyLogger));
console.log('Store created');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
