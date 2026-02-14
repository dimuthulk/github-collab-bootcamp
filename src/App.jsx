import React, { useState } from "react";
import { add } from "./utils/calc";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const result =
    num1 !== "" && num2 !== "" ? add(Number(num1), Number(num2)) : null;

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <span> + </span>
      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default App;
