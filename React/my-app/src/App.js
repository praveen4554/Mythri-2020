import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TestComponent} from './TestComponent';
import FormValidation from './FormValidation';
import { CheckoutContainer } from './CheckoutContainer';
import { Counter } from './Counter';
import { ClickCounter } from './ClickComponent';
import HoverCounter from './HoverComponent';
import { connect } from 'react-redux';
function App(props) {
  return (
    <div className="App">
    {props.userName}
    <Counter render={(counter, incrementCount, decrementCount) => (
      <ClickCounter counter = {counter} incrementCount={incrementCount} decrementCount={decrementCount}/>
    )}>
    </Counter>
    <Counter render={(counter, incrementCount,decrementCount) => (
      <HoverCounter counter = {counter} incrementCount={incrementCount} decrementCount={decrementCount}/>
    )}>
    </Counter>
    <button onClick={props.user}>changeUser</button>
    {/*<header className="App-header">
     <CheckoutContainer/>
    <TestComponent/>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      REQUIREMENT
      1.  counter in one place when click on it i want to incrementCount
      2. counter in another place when i hover i want to incremntCount
      counterComponent - onCLick 
      counterCOmponent - onhover
</header>*/}
      </div>
  );
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    userName: state.user
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
     user: () => dispatch({type: 'Authorization',value:'praveen'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);