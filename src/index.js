import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { createStore } from "redux";
import { Provider } from 'react-redux';
const initialState={
  count1: 0,
  count2: 0
   };
function reducer(state = initialState, action) {
  console.log('hola first tinme')
  switch(action.type) {
case 'first_increment':
      return {
       count1: state.count1 + action.payload,
       count2:state.count2
 };
case 'first_decrement':
           return {
       count1: state.count1 + action.payload,
       count2:state.count2
      };
case 'second_increment':
      return {
       count1:state.count1,
       count2: state.count2 + action.payload
      };
      // return {...state, count2: state.count2 + action.payload}
case 'second_decrement':
           return {
      count1:state.count1,
       count2: state.count2 + action.payload
      };
      // return{...state,count2: state.count2 + action.payload}
    default:
    return state
  }
}
const store=createStore(reducer);
const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));
