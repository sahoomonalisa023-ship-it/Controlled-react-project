import { useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const handleSkill = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((item) => item !== value));
    }
  };
  return (
    <div>
      <h1>Select your Skills</h1>
      <input onChange={handleSkill} type="checkbox" id="php" value={"php"} />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input onChange={handleSkill} type="checkbox" id="css" value={"css"} />
      <label htmlFor="css">CSS</label>
      <br />
      <br />
      <input
        onChange={handleSkill}
        type="checkbox"
        id="javascript"
        value={"javascript"}
      />
      <label htmlFor="javascript">JAVASCRIPT</label>
      <br />
      <br />
      <input
        onChange={handleSkill}
        type="checkbox"
        id="bootstrap"
        value={"bootstrap"}
      />
      <label htmlFor="bootstrap">BOOTSTRAP</label>
      <br />
      <br />
      <h1>{skills.toString()}</h1>
    </div>
  );
}
