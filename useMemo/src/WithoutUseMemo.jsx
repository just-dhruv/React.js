import { useState } from 'react'

function WithoutUseMemo(){
    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState("");

    const expensiveCalculation = () => {
        console.log('funtion is running');
        let total = 0;

        for( let i = 0; i < 1000000000; i++){
            total += i;
        }

        return total

    }

    const result = expensiveCalculation();

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

export default WithoutUseMemo