import React from 'react';

export default function List(props) {
   const list = props.data.map((val,index)=> <li key={index}>${val.userName}</li>);
 // console.log(list);
  return(
      <ul>
      {list}
      </ul>
  )
}

/**
 * virtual dom li1 li2 li3 
 * li1 - id10
 * li2 id11
 * li3 id12 
 * 
 */