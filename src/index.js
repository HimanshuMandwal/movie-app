import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers/index';



const store = createStore(movies);
 console.log('before state ',store.getState());//used to get the state
store.dispatch({ //dispatch method is used to send the actions
  type : 'ADD_MOVIES',
  movies : [{name :'mirzapur'}]
});
console.log('after state',store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
