import React, { useState } from 'react';

function B({cendol}) {
  
const [count,setCount]= useState(2)

const Increment=()=>{
    setCount(count+10)
}

  return (
    <div>
      <p>{count}</p>
      <button onClick={Increment}>Increment by 10</button>
    </div>
  );
}

export default B;