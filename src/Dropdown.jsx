import { useState } from "react";

export default function Dropdown() {
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  return (
    <div>
      <h1>Handle radio and Dropdown</h1>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        checked={gender == "male"}
        name="gender"
        id="male"
        value={"male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        checked={gender == "female"}
        name="gender"
        id="female"
        value={"female"}
      />
      <label htmlFor="female">Female</label>
      <h2>Selected gender:{gender}</h2>
      <br />
      <br />
      <br />
      <h2>select city</h2>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={"delhi"}
      >
        <option value="delhi">Delhi</option>
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
      </select>
      <h2>selected city:{city}</h2>
    </div>
  );
}
