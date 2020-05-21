import React, { Component } from "react";
import "./Login.css";
import MakeList from "./MakeList";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      usersList: [],
      userNameErr: "",
      passwordErr: "",
      userNameErrMsg: "",
      passwordErrMsg: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const userNameErr = this.state.userName.length > 5 ? false : true;
    const passwordErr = this.state.password.length > 5 ? false : true;
    console.log(userNameErr, passwordErr);
    var tempList = [];
    if (!userNameErr && !passwordErr) {
      tempList = this.state.usersList;
      console.log("tempList before", tempList);
      tempList.push(this.state.userName);
      console.log("tempList after", tempList);
      this.setState({
        usersList: tempList,
        userNameErrMsg: "",
        passwordErrMsg: "",
      });
      console.log("usersList", this.state.usersList);
    } else {
      this.setState({ userNameErr: userNameErr, passwordErr: passwordErr });
      if (userNameErr) {
        this.setState({
          userNameErrMsg: "Username should be more than 5 characters",
        });
      } else {
        this.setState({ userNameErrMsg: "" });
      }
      if (passwordErr) {
        this.setState({
          passwordErrMsg: "Password should be more than 5 characters",
        });
      } else {
        this.setState({ passwordErrMsg: "" });
      }
    }
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    return (
      <div className="whole">
        <header>
          <h3>Login Page</h3>
        </header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              id="userName"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </div>
          <div>{this.state.userNameErrMsg}</div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div>{this.state.passwordErrMsg}</div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div>
          <MakeList data={this.state.usersList} />
        </div>
      </div>
    );
  }
}

export default Login;
