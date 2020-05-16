import React from 'react';
import { PersonalComponent } from './PersonalInfo';
import { AddressComponent } from './AddressInfo';
export class CheckoutContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            personalInfo: {
                firstName: '',
                lastName: ''
            },
            addressInfo: {
                aptNo: '',
                state: '',
                val: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(obj,key){
        //  let obj = this.state[key];
        //  obj[event.target.id] = event.target.value;
        //  obj.val = 'test';
        this.setState({[key]:obj},()=>{
            console.log(this.state);
        });
        // console.log(this.state);
        // this.setState({
        //     personalInfo: {
        //         firstName: 'praveen'
        //     }
        // },()=>{
        //     console.log(this.state);
        // })
        
    }
      handleSubmit(event){
        event.preventDefault();
        this.setState({addressInfo:{
            val:'test'
        }})
        console.log(this.state);
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
              <PersonalComponent data={this.state.personalInfo} handleChange={this.handleChange}/>
              <AddressComponent data={this.state.addressInfo} handleChange={this.handleChange}/>
              <input type="submit"/>
            </form>
            </div>
        )
    }
}