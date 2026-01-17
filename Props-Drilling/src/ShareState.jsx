import { useState } from "react";

function ShareState(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <ChiledA setCount={setCount} />
            <ChiledB count={count} />
        </div>
    )


}

function ChiledA(props){
    const handleClick = () => {
        props.setCount(prevCount => prevCount + 1);
    }
    return <button onClick={handleClick}>Click</button>
}

function ChiledB(props){
    return <h2>count: {props.count}</h2>
}


export default ShareState