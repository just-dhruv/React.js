import { useState } from "react";

export default function BasicValidation(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function handleForm(e){
        e.preventDefault();
        if(!name || !email){
            setError("All fields are required");
        }else{
            setError("");
            console.log("name: ", name, "email: ", email);
        }
    }
    return(
        <div>
            <h2>Basic Validation Form</h2>
            <form action="" onSubmit={handleForm}>
            
                <input type="text" value={name} name="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="email" name="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button type="submit">Submit</button>

                { error && <p>{error}</p>}
            </form>
        </div>
    )
}