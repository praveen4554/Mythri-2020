import React, {useState, useEffect} from 'react';
// export class AddressComponent extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     shouldComponentUpdate(){
//         return true;
//     }
//     componentDidUpdate(){
//         console.log(this.props);
//         console.log('Address info component callled');
//     }
//     render(){
//         return(
//          <div>
//          {this.props.data.val}
//           <div>
//           <input type="text" id="aptNo" placeholder="Apartment number" onChange={(event)=>this.props.handleChange(event,'addressInfo')}/>
//           </div>
//           <div>
//           <input type="text" id="state" placeholder="State" onChange={(event)=>this.props.handleChange(event,'addressInfo')}/>
//           </div>
//           </div>
//         )
//     }
// }

export function AddressComponent(props){
    const [count, setCount] = useState(0)
    const [aptNo, setApt] = useState(props.aptNo)
    const [state, setState] = useState(props.state)
    const [aptNoError, setAptError] = useState(false)
    const [stateError, setStateError] = useState(false)
    useEffect(()=>{
        console.log('Hook called');
    },([state]));
    return(
                 <div>
                 {count}
                 <button onClick={()=> setCount(count+1)}>increment</button>
          <div>
          <input type="text" id="aptNo" placeholder="Apartment number" onChange={(event)=>setApt(event.target.value)} onBlur={()=>{
            //   console.log(aptNo);
            //   console.log(aptNo && (aptNo.length < 1))
              if(!aptNo || (aptNo.length < 1)){
                  setAptError(true);
              } else {
                  setAptError(false);
              }
          }}/>
          {aptNoError?<div>please enter Apt</div>: ''}
          </div>
          <div>
          <input type="text" id="state" placeholder="State" onChange={(event)=>setState(event.target.value)} onBlur={()=> props.handleChange({aptNo: aptNo,state: state},'addressInfo')}/>
                 {stateError?<div>please enter Apt</div>: ''}
          </div>
          </div>
    )
}