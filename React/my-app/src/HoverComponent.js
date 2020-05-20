import React from 'react';
import { connect } from 'react-redux';

 class HoverCounter extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
    const { counter , incrementCount, decrementCount} = this.props
    return(
        <div>
        UserName: {this.props.userName}
        hover counter {counter}
        <button onMouseOver={incrementCount}>
          Hover
        </button>
        <button onClick={decrementCount}>
          Decrement
        </button>
        </div>

    )
    }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    userName: state.user
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
     user: () => dispatch({type: 'Authorization',value:'praveen'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(HoverCounter);