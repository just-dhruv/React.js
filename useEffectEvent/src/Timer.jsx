import { useState, useEffect, useEffectEvent } from 'react'

export default function Timer() {
    const [count, setCount] = useState(0)

    const onTick = useEffectEvent(() => {
                console.log('count :', count);
                setCount((prev) => prev + 1);
            })

    useEffect(() => {
        const interval = setInterval(() => {
        onTick();            
        }, 1000)

        return () => {
            clearInterval(interval);
        }

    })

    return (
        <>
            <h1>Timer: {count}</h1>
        </>
    )
}