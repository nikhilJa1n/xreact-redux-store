import { reducer } from './reducer.js'; //import your reducer

// get state
let state;
export const getState = () => state;

const listeners = [];
export const subscribe = listener => {
  listeners.push(listener);
  return listeners;
};

//dispatch function and calling
export const dispatch = action => {
  state = reducer(action, state);
  listeners.forEach(listener => listener());
};

//calling dispatch to get state first time
dispatch({});
