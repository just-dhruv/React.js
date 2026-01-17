import { useEffect, useLayoutEffect } from "react";

function Test() {
  useEffect(() => {
    console.log("useEffect rung");
  }, []);

  // useLayoutEffect runs first, befor the html rendered
  useLayoutEffect(() => {
    console.log("useLayoutEffect rung");
  }, []);

  return <h1>useEffect</h1>;
}

export default Test;
