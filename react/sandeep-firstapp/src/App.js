import React, { Component } from 'react';

import './App.css';
import Sandeepbiodata from './Sandeepbiodata/Sandeepbiodata';

class App extends Component {
  state={ 
    sandy:[ {Age  : "28"},
            {Address : "United State"},
            {CreditScore  : "" },
            {Billing_Address : "Texas"}
           ],
  otherState:'See CreditScore'}
  addCreditScoreHandler= () => { 
    this.setState ({
    sandy:[{Age : "28"},
    {Address : "United State"},
      {CreditScore :"345" },
      {Billing_Address : "Texas"}]
    })
  }
  render() {
    return (
      <div className="App">
        
     <h1>Sandeep's First App</h1>
     <p>Its my first react page</p>
     <Sandeepbiodata  Age ={this.state.sandy[0].Age}
      Address ={this.state.sandy[1].Address} 
       CreditScore={this.state.sandy[2].CreditScore}
  Billing_Address={this.state.sandy[3].Billing_Address}/>
     <button onClick={this.addCreditScoreHandler}>Show Credit Score</button>
        
      </div>
    );
  }
}

export default App;