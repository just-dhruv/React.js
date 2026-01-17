import { useMemo } from 'react';
import { useState } from 'react'

function WithUseMemo(){
    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState("");

    const expensiveCalculation = (n) => {
        console.log('funtion is running');
        console.log(n);
        let total = 0;

        for( let i = 0; i < 100000; i++){
            total += i;
        }

        return total + n;

    }

    const result = useMemo(() => expensiveCalculation(count), [count]);

    return(
        <div>
            <h2>Total : {result}</h2>

            <h3>Count : {count}</h3>

            <button onClick={() => setCount(count + 1)}>Increase</button>
            <br />
            <input type="text" value={text} 
                onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

export default WithUseMemo