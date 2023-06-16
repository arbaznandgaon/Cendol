import React from "react";
import B from "./B";

function A() {
  var cendol = 2;

  return (
    <div> 
      <B cendol={cendol} />
    </div>
  );
}

export default A;
