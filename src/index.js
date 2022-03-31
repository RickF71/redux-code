import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
// import CounterReducer from './reducer/CounterReducer';
import { Provider } from 'react-redux';
// import FavoriteColor from './component/FavoriteColor';
// import FavColorReducer from './reducer/FavColorReducer';
import FavColorCheckReducer from './reducer/FavColorCheckReducer';
import MyLogger from './middleware/MyLogger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Store } from 'redux';
// import Posts from './component/Posts';
// import './index.css';
// import postReducer from './reducer/postReducer';
import Temp from './component/Temp';
import reportWebVitals from './reportWebVitals';

const devTools = composeWithDevTools(applyMiddleware(MyLogger))

const store = createStore(FavColorCheckReducer, devTools);
// const store = createStore(postReducer, devTools);
//console.log('Store created');
ReactDOM.render(
  <Provider store={store}>
  {/* <Provider> */}
    <App />
    {/* <Temp /> */}
    {/* <Posts /> */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
