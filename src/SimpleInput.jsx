import { useState } from "react";

export default function SimpleInput() {
  const [val, setVal] = useState("");
  return (
    <div>
      <h1>Get input field value </h1>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter your Name"
      />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Clear</button>
    </div>
  );
}
