import React, { Component } from 'react';
class Counter extends Component {
  state = {
    counter: 0,
  };
  handleInc = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        {this.state.counter}
        <br />
        <button onClick={this.handleInc}>Increment</button>
      </div>
    );
  }
}

export default Counter;
