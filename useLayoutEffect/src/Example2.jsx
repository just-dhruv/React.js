import { useLayoutEffect, useRef } from "react"


function Example2(){
    const boxRef = useRef();

    useLayoutEffect(() => {
        const el = boxRef.current
        const width = el.offsetWidth;
        console.log(width);

        el.style.transform = `translateX(${width}px)`;
    }, [])

    return(
        <>
            <div ref={boxRef} style={{
                width: "200px",
                padding: "20px",
                background: "#eee",
                transition: "3s"
            }}>
                Hello World
            </div>
        </>
    )
}

export default Example2