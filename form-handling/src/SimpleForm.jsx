import { useState } from "react";

function SimpleForm(){

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log('name:', name);
        console.log('email:', email);
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h2>React form example</h2>

                <label htmlFor="">Name</label>
                <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                         />

                <label htmlFor="">Email</label>
                <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm