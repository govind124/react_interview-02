import React, { useState } from 'react';
import Child from './Chile';

function Parent(){
   
  const[data, setData] = useState(" Send Data");

  const parentToChild = () =>{
     setData("sending data parent to child");
     console.log("Done");
  }

  return(
    <div>
      <h1> Parent to Child data transfer</h1>
      <Child parentToChild={data}/>
      <button onClick={() =>parentToChild()}>Update</button>
    </div>
  )
}

export default Parent;