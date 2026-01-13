import { useState } from "react";

export default function Controlled() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1>Controlled Component</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter your password"
      />
      <br />
      <br />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
      />
      <br />
      <br />
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
      <button>Submit</button>
      <button
        onClick={() => {
          setName("");
          setPassword("");
          setEmail("");
        }}
      >
        Clear
      </button>
    </div>
  );
}
