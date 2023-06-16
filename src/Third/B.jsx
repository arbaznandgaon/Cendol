import React, { useState } from "react";

function B({ cendol }) {
   const [count, setCount] = useState(2);

  const Increment = () => {
    setCount(count + 10);
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="text-3xl rounded-full w-56 p-8 bg-cyan-400 font-semibold">
        <a className="">Initial Value: {count}</a>
        <button className="text-sm underline font-semibold" onClick={Increment}>
          Increment by 10
        </button>
      </div>
    </div>
  );
}

export default B;
