import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SimpleInput from "./SimpleInput";
import Controlled from "./Controlled";
import Skills from "./Skills";
import Dropdown from "./Dropdown";

function App() {
  // const [val, setVal] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <SimpleInput />
      <Controlled />
      <Skills />
      <Dropdown />
    </div>
  );
}

export default App;
