<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<TestComponent />, document.getElementById("root"));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { myReducer } from './reducers/reducer';
import { createStore, applyMiddleware } from 'redux';
// const store = createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
function logger({getState}){
  return next => action => {
    console.log(action)
    console.log(getState())
    return next(action)
  } 
}
const store = createStore(myReducer,applyMiddleware(logger));
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
>>>>>>> 1e100591f27bc0dd64d8b9d01bcca8467fc2e620

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
