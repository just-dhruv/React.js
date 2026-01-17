import { useEffect, useEffectEvent, useState } from "react"

export default function WindowWidth(){
    const [width, setWidth] = useState(window.innerWidth)

    const widthChange = useEffectEvent(() => {
        setWidth(window.innerWidth);
    })

    useEffect(() => {
        window.addEventListener('resize', widthChange);
        return() => {
            window.removeEventListener('resize', widthChange);
        }

    },[])

    return(
        <>
            <h2>Window Width: {width}px</h2>
        </>
    )

}