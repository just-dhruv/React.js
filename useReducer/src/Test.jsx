import { useState, useReducer } from "react"

// USING useState
// export default function Test(){
//     const [checked, setChecked] = useState(false);
//     return(
//         <div>
//             <input type="checkbox" checked={checked}
//                 onChange={() => setChecked(!checked)}
//             />

//             {checked ? " Checked" : " Not Checked" }
//         </div>

//     )
// }

// USING useReducer

export default function Test(){
    const [checked, toggle] = useReducer((checked) => !checked, false);

    return(
        <div>
            <input type="checkbox" checked={checked}
                onChange={toggle}
            />

            {checked ? "Checked" : "Not Checked"}
        </div>
    )
}