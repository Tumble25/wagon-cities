// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
// const reducers = combineReducers({
//   // cities: citiesReducer
// });

// render an instance of the component in the DOM
// ReactDOM.render(
//   <Provider store={createStore(reducers)}>
//     <App />
//   </Provider>,
//   document.querySelector('.container')
// );


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    root
  );
}
