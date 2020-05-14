import React from 'react';
const axios = require('axios');

export default class LifeCycleHooks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    // componentWillMount(){
    //     console.log('will mount');
    // }
    componentDidMount(){
        console.log('did mount');
        fetch('https://jsonplaceholder.typicode.com/todos/1').
        then((res)=> res.json()).then((result)=>{
            console.log(result);
            this.setState({name: result.title});
        })
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        //API Calls
        // it will be called only once 
    }
    static getDerivedStateFromProps(props,state){
        console.log(props);
        console.log(state);
        return props;
    }
    // componentWillReceiveProps(nextProps){
    //     console.log('will receive props');
    //     console.log(nextProps);
    // }
    /**conditional rendering */
    // shouldComponentUpdate(){
    //    if(this.state.name === 'praveen')
    //         return false;
    //     return true;
    // }
    // componentWillUpdate() {
    //     console.log('will update');
    // }
    getSnapshotBeforeUpdate(prevProps,nextProps){
        console.log(prevProps);
        console.log(nextProps);
        return nextProps;
    }
    componentDidUpdate(){
        console.log('did update');
    }
    componentWillUnmount(){

    }
    changeData(){
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers:{
        'content-type':'application/json',
        'token': 123455
    }
        }).then((res)=>{
            console.log(res);
        });
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title: 'foo',
      body: 'bar',
      userId: 1
        }).then((res)=>{
            console.log(res);
        })
        if(this.state.name === 'abc')
        this.setState({
            name:'def'
        })
        else
          this.setState({name:'abc'})
    }
    render(){
        return(
            <div>
              Life cycle hooks  {this.state.name}
              <button onClick={()=> this.changeData()}>change Data</button>
            </div>
        )
    }
}

/**
 * checkout page - parent componet
 *  personal info
 * address info
 * billing info
 * t&c
 * credit card
 * 
 * updating the address - we need to call back to parent 
 * parent will update the state method 
 * 
 * setState - will rerender
 * parent omponetn - personal info, a.i , b.i, t&c, c&c
 * shouldComponentUpdate - we are checking whther the props changed or not 
 * setState - rerender the component
 * componentDidUpdate- setState - rerender the Component - componentDidUpdate
 * setState - rerender your component
 * componentDidUpdate - it will called
 * setState - rerender the component 
 *  checkout - personalInfo
 * guest/ authenticated or registered user 
 * checkout - class - coponentDidMount - in which api call and i will get 
 * the personal info setState i will update and render 
 * has updated personal info checkout button we need to put update call his personal info 
 * updateing record we use 2 calls one is put and patch
 * put will update entire record based on id table fn,ln,address update fn,nlnand address
 * patch will update update few info not entire record fn or ln or addr i will go for patch 
 * delete it will deletes the data 
 * pathparams query prams 
 * google.com?key=value == query params
 * path params
 * https://jsonplaceholder.typicode.com/posts/1 - path params
 * https://jsonplaceholder.typicode.com/posts/2
 * singlesignon - token 
 * oauth2 - if you logged in i will get a notification i need to approve then you can access it 
 * dropbox integration oauth2 
 * refreshtoken - 
 */