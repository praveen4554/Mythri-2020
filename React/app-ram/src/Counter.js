import React from "react";
export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  incrementCount = (value) => {
    this.setState((prevState) => {
      return { counter: prevState.counter + value };
    });
  };
  decrementCount = (value) => {
    this.setState((prevState) => {
      return { counter: prevState.counter - value };
    });
  };
  render() {
    return (
      <div>
        {this.props.render(
          this.state.counter,
          this.incrementCount,
          this.decrementCount
        )}
      </div>
    );
  }
}
