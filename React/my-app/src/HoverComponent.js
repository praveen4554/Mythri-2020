import React from 'react';
export class HoverCounter extends React.Component {
    render(){
    const { counter , incrementCount, decrementCount} = this.props
    return(
        <div>
        hover counter {counter}
        <button onMouseOver={incrementCount}>
          Hover
        </button>
        <button onClick={decrementCount}>
          Decrement
        </button>
        </div>

    )
    }
}