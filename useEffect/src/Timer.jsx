import { useState, useEffect } from 'react'

function Timer() {
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond((prev) => prev + 1)
        }, 1000)

        return() => {
            clearInterval(interval);
            console.log('interval cleared');
        }
    },[])

    return (
        <>
            <h1>Seconds: { second }</h1>
        </>
    )
}

export default Timer