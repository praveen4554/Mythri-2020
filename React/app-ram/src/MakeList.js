import React from "react";

export default function MakeList(props) {
  const list = props.data.map((val, index) => <li key={index}>{val}</li>);
  //console.log({ list });
  return <ul>{list}</ul>;
}
