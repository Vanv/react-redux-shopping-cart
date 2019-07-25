import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//create store
import { createStore } from 'redux';

//Reducre function
function reducer(state, action) {
    // console.log(action);
    if(action.type === 'changeState') {
        return action.payload.newState
    }
    return 'state'; 
}

const store = createStore(reducer);
console.log(store.getState());

//dispatch action
const action = {
    type: 'changeState',
    payload: {
        newState: 'New State'
    }
}

store.dispatch(action);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
