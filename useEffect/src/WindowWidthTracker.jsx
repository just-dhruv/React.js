import { useState, useEffect } from 'react'

function WindowwidthTracker(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return(
        <>
            <h1>Window Width: {width}px</h1>
        </>
    )

}

export default WindowwidthTracker