import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch(action.type){
        case "INC":
            return { count : state.count + 1 };
        case "DEC":
            return { count : state.count - 1} ;
        case "ADD" : 
            return { count : state.count + 5 };
        case "RESET" : 
            return { count : 0}
        default:
            return state ;
    }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: "INC" })}>+1</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-1</button>
      <button onClick={() => dispatch({ type: "ADD", value: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
