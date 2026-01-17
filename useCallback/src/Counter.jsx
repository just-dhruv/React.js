import { useCallback, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // create only one time and store it into memory so the app doesnt load much
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h2>Count : {count}</h2>

      <button onClick={increment}>Increase</button>
    </>
  );
}

export default Counter;
