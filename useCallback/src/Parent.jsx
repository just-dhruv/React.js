import { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  // create only one time and store it into memory so the app doesnt load much
  const handleclick = useCallback(() => {
    console.log("child function run again..");
  }, []);

  return (
    <>
      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count + 1)}>Parent </button>

      <Child click={handleclick} />
    </>
  );
}

export default Parent;
