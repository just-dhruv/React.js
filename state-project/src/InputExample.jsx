import { useState } from "react";

function InputExample(){
    const [ name, setName ] = useState("")

    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />

            <p>Hello {name || "Guest" }</p>
        </>
    )
}

export default InputExample