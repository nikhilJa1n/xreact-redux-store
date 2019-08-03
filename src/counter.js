import React, { Component } from 'react';
import { dispatch, getState } from './store';

class Counter extends Component {
  handleInc() {
    dispatch({
      type: 'INC',
    });
  }
  render() {
    return (
      <div>
        <h1>{getState().counter}</h1>
        <button onClick={this.handleInc}>Increment</button>
      </div>
    );
  }
}

export default Counter;
