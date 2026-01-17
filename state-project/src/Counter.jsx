import { useState } from "react"

function Counter({label}){
    const [count, setCount] = useState(1);

    function increment(){
        setCount(count + 1);
    }

    return(
        <div>
            <h2>Counter = {count}</h2>
            <button onClick={increment} >{label}</button>
            <br />
            <button onClick={() => setCount(count - 1)}>Remover Count</button>
        </div>
    )




}

export default Counter