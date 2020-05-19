import React from 'react';
import { Counter } from './Counter';
export class ClickCounter extends React.Component {
    render(){
    const { counter , incrementCount, decrementCount} = this.props
    return(
        <div>
        click counter {counter}
        <button onClick={incrementCount}>
          CLick
        </button>
        <button onClick={decrementCount}>
          Decrement
        </button>
        </div>

    )
    }
}