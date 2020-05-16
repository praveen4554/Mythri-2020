import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TestComponent} from './TestComponent';
import FormValidation from './FormValidation';
import { CheckoutContainer } from './CheckoutContainer';
function App() {
  return (
    <div className="App">
    <CheckoutContainer/>
    {/*<header className="App-header">
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
</header>*/}
      </div>
  );
}

export default App;
