import React, { Component } from 'react'
import CheckoutChild from './CheckoutChild';

class CheckoutParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            personalInfo : "",
            addressInfo : "",
            creditInfo : "",
            billingAddress : "",
            termsandConditions : ""
             
        };
        
        this.infoChange = this.infoChange.bind(this);
        this.infoSubmit = this.infoSubmit.bind(this);
    }
    
    infoSubmit(event) {
        const{PersonalInfo,AddressInfo,CreditInfo,BillingAddress,TermsandConditions} = this.state;
           
    }

    infoChange(event){
        this.setState({
            [event.taget.name] :event.target.value
        });
    }

    render() {
        return (
            <div>
                <CheckoutChild eventHandler = {this.infoSubmit}/>
                <CheckoutChild eventHandler = {this.infoChange}/>
                <form onSubmit = {this.infoSubmit}>
                    <input
                    type = "personalInfo"
                    name ="personalInfo"
                    placeholder = "PersonalInfo"
                    value = {this.state.personalInfo}
                    onChange ={ this.infoChange}
                    />
                    <input
                    type = "addressInfo"
                    name ="addressInfo"
                    placeholder = "AddressInfo"
                    value = {this.state.addressInfo}
                    onChange ={ this.infoChange}
                    />
                    <input
                    type = "creditInfo"
                    name ="creditInfo"
                    placeholder = "CreditInfo"
                    value = {this.state.creditInfo}
                    onChange ={ this.infoChange}
                    />
                    
                </form>
            </div>
        )
    }
}

export default CheckoutParent
