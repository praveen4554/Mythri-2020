import React from 'react';
import Test from './TestFunctionalComponent';

export class TestComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            name: 'praveen',
            childData: 'Mythri'
        };
        this.changeName = this.changeName.bind(this);
        this.childData = this.childData.bind(this);
    }
    changeName(){
        console.log('user clicked');
        console.log(this.state);
       // this.state.name = 'praveen kumar';
       this.setState({name:'praveen kumar'},()=>{
           console.log(this.state);
       })
        // console.log(this.state); mutable vs immutable
    }
    childData(event){
        console.log(event);
        this.setState({childData: 'Data from Child'});
    }
    render(){
        return (
            <div>
            <Test value={this.state.childData} onDataChange={this.childData}/>
               Test component {this.state.name}
               <button onClick={this.changeName}> changeName</button>
            </div>
        )
    }
}