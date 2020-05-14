import React from 'react';
import List from './List';
import { InputComponent } from './InputComponent';
export default class FormValidation extends React.Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            password: '',
            userNameError: false,
            passwordError: false,
            usersList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.textInput = React.createRef();
        this.child1  = React.createRef();
        this.child2 = React.createRef();
    }
    componentDidMount(){
        console.log(this.textInput);
       // this.textInput.current.focus();
      // this.textInput.current.disabled = true;
      this.child1.current.focus();
      this.child2.current.disabled = true;
    }
    handleChange(event) {
        this.setState({
            [event.target.id] : event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const userNameError = this.state.userName.length > 5 ? false : true;
        const passwordError = this.state.password.length > 5 ? false : true;
        if( !userNameError && !passwordError){
             this.setState({
            userNameError: userNameError,
            passwordError: passwordError,
            usersList: [{userName: 'abc'},{userName: 'def'},{userName: 'aaa'}]
        }) 
        } else {
        this.setState({
            userNameError: userNameError,
            passwordError: passwordError
        }) 
        }
    }
  render(){
      return(
          <div>
          <form onSubmit={this.handleSubmit}>
          <div>
          <input type="text" ref={this.textInput} id="userName" placeholder="userName" onChange={this.handleChange}/>
          {this.state.userNameError ? 
              <div>userName length should be greater than 5</div>:''}
          </div>
          <div>
          <input type="password" id="password" placeholder="password" onChange={this.handleChange}/>
          {this.state.passwordError ? 
              <div>password length should be greater than 5</div>:''}
          </div>
          <input type="submit"/>
          </form>
          <InputComponent ref={this.child1} placeholder="child1"/>
          <InputComponent ref={this.child2} placeholder="child2"/>
          <List data={this.state.usersList}/>
          </div>
      )
  }
}