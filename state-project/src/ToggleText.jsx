import { useState } from 'react'

function ToggleText() {

    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
            <h2>Variable value : {isVisible.toString()}</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "hide text" : "show text"}
            </button>
            {isVisible && <p>This is the text to be toggled</p>}
        </>
        
    )
}

export default ToggleText