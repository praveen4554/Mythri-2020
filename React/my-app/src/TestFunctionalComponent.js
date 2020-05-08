import React from 'react';
export default function Test(props) {
    var a = 1;
    console.log(props);
    return(
        <div>
        <div>Parent Data {props.value}</div>
        { 1 + 1}
        {a == 10 ? <div>we are displaying the value of a {a}</div>:
    <div>we are displaying no value</div>}
      <button onClick={()=>props.onDataChange(a)}> Pass the data to parent</button>
        </div>
    )
}