import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("bg-green-300");

  function Increment() {
    setCount(count + 1);
  }
  function colorChange() {
    if (color === "bg-green-300") {
      setColor("bg-cyan-300");
    } else {
      setColor("bg-green-300");
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-center">
        <div className="bg-gray-300 p-8 rounded-lg">
          <div className="bg-yellow-400 w-44 h-44  rounded-full pt-10">
            <div className="text-4xl font-bold"> {count}</div>
            <button className="text-xs underline" onClick={Increment}>
              Click to Increment Counter
            </button>
          </div>
        </div>
        <br></br>
      </div>
      <div>
        <button
          onClick={colorChange}
          className={`${color} py-2 px-4 font-semibold rounded-lg shadow-2xl`}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default Home;
