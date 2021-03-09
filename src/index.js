import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//pass in the provider component that will take in the store so that every child from the provider will have access to the variables inside the store 
import { Provider } from "react-redux";
import store from "./redux/store"



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//for redux tool kit you have to install the toolkit dependencies and react-redux as well.
// yarn add @reduxjs/toolkit react-redux
/*

We need to create a redux store, it will be an initial set up for redux tool kit. This store is going to be the thing we create that we pass in to the top level component (index.js) to give every components under it access to any variable store in redux.
*/