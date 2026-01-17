import { useState, useEffect } from 'react'

function First(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Dhruv');

    useEffect(() => {
        document.title = `count: ${count}`;
        console.log('Component Render')

    }, [count])

    return (
        <>
            <h1>Count: { count }</h1>
            <h2>Name: { name }</h2>
            <button onClick={() => { setCount(count + 1);}}>Increase</button>
            <button onClick={() => { setName('Rahul')}}>Name</button>
        </>
    )
}

export default First