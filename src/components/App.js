import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [value, setValue] = useState("");
  let [sum, setSum] = useState(0);

  function handleChange(e) {
    setValue(e.target.value);
    setSum(sum+parseInt(e.target.value));
  }

  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type="number" value={value} onChange={handleChange}></input>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
