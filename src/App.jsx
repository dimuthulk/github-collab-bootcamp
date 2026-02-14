import React, { useState } from "react";
import { add } from "./utils/calc";

const App = () => {
  const [count, setCount] = React.useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const result =
    num1 !== "" && num2 !== "" ? add(Number(num1), Number(num2)) : null;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub Collaboration Bootcamp</h1>
      <p>Welcome to the 7-Day Self-Bootcamp project.</p>
      <div style={{ marginTop: "20px" }}>
        <p>
          Counter: <strong>{count}</strong>
        </p>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#0366d6",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Click me
        </button>
      </div>
      <h1>GitHub Collab Bootcamp</h1>
      <p>This is a small paragraph.</p>
      <button>Click me</button>
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
