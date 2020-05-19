import React from 'react';
export class PersonalComponent extends React.PureComponent {
    constructor(props){
        super(props);
    }
    componentDidUpdate(){
        console.log('Personal info component callled');
    }
    render(){
        return(
         <div>
          <div>
          <input type="text" id="firstName" placeholder="firstName"/>
          </div>
          <div>
          <input type="text" id="lastName" placeholder="lastName"/>
          </div>
          </div>
        )
    }
}