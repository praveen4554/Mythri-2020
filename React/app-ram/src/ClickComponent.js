import React from "react";
import { Counter } from "./Counter";
export class ClickCounter extends React.Component {
  render() {
    const { counter, incrementCount, decrementCount } = this.props;
    const value = 2;
    return (
      <div>
        click counter {counter}
        {/* <input type */}
        {/* <button onClick={incrementCount}> */}
        <button onClick={() => incrementCount(value)}>CLick</button>
        <button onClick={() => decrementCount(value)}>Decrement</button>
      </div>
    );
  }
}
