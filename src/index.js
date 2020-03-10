/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from "./reducers";
import { Provider } from 'react-redux'

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

// // Store - Globalized State

// // Action Increment
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// // Reducer 
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//     }
// }

// let store = createStore(counter);

// // Display it in the  console
// store.subscribe(() => console.log(store.getState()));

// // Dispatch
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
