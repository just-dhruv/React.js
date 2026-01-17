import React, { useState, useMemo } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const user = useMemo(() => ({ name: "dhruv Dhruv", age: 20 }), []);

  console.log("Parent Running...");
  return (
    <>
      <h1>Parent Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child value={user} />
    </>
  );
}

const childMemory = ({ value }) => {
  console.log("Child Rendered..");
  return <h2>Child : {value.name}</h2>;
};

const Child = React.memo(childMemory); // React.memo used so the component doesn't run again if the value is not changed.

export default Parent;
