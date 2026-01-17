import { useState } from "react";

function StateLifting() {
  const [text, useText] = useState("");

  return (
    <div>
      <InputBox onChange={useText} />

      <Display value={text} />

      <h2>Type: {text}</h2>
    </div>
  );
}

function InputBox({ onChange }) {
  return <input type="text" onChange={(e) => onChange(e.target.value)} />;
}

function Display({ value }) {
  return <h3>Type: {value}</h3>;
}

export default StateLifting;
