import React, { useState } from "react";
import "./styles.css";

const useInput = (input, validator) => {
  const [value, setValue] = useState(input);
  const onChange = (event) => {
    //event.target.value
    const {
      target: { value }
    } = event;
    let willUpdate = false;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate === true) {
      setValue(input);
    }
  };
  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
      <input placeholder="Name" {...name} />
    </div>
  );
}
