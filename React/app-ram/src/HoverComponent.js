import React from "react";
export class HoverCounter extends React.Component {
  render() {
    const { counter, incrementCount, decrementCount } = this.props;
    const value = 1;
    return (
      <div>
        hover counter {counter}
        <button onMouseOver={() => incrementCount(value)}>Hover</button>
        <button onMouseOver={() => decrementCount(value)}>Decrement</button>
      </div>
    );
  }
}
