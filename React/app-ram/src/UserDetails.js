import React, { Component } from "react";
import "./UserDetails.css";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";

class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      contact: "",
      street: "",
      apt: "",
      city: "",
      state: "",
      country: "",
      displayMsg: "",
    };
    this.handleDataChange = this.handleDataChange.bind(this);
  }
  handleDataChange(event, str) {
    event.preventDefault();
    this.setState({
      displayMsg: str + " Information is updated",
    });
  }
  render() {
    return (
      <div className="whole">
        <div className="span50">
          <PersonalDetails onDataChange={this.handleDataChange} />
        </div>
        <div className="span50">
          <AddressDetails onDataChange={this.handleDataChange} />
        </div>
        <div className="cent">{this.state.displayMsg}</div>
      </div>
    );
  }
}

export default UserDetails;
