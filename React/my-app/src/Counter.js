import React from 'react';
export class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    incrementCount = () =>{
        this.setState((prevState)=>{
            return { counter: prevState.counter+1}
        })
    }
    decrementCount = () =>{
        this.setState((prevState)=>{
            return { counter: prevState.counter-1}
        })
    }
    render(){
        return(
            <div>
              {this.props.render(this.state.counter, this.incrementCount, this.decrementCount)}
            </div>
        )
    }
}