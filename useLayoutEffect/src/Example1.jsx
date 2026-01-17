import { useState, useRef, useLayoutEffect } from "react"

function Example1(){
    const hRef = useRef(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(hRef.current.clientHeight);
    }, [])

    return(
        <>
            <div ref={hRef} style={{width:"200px", padding: "30px", background: "#eee"}}>Hello World</div>
            <p>Height : {height}</p>
        </>
    )
}

export default Example1