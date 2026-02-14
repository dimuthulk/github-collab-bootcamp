import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

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
    </div>
  );
};

export default App;
