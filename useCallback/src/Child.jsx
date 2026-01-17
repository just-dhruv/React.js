import React from "react";

function Child({ click }) {
  console.log("1st time Child Rendered..");
  return (
    <>
      <button onClick={click}>Child Button</button>
    </>
  );
}

export default React.memo(Child);
