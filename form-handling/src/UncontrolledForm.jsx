import { useRef } from "react";

export default function UncontrolledForm(){

    const nameField = useRef();
    const emailField = useRef();

    function handleForm(e){
        e.preventDefault();
        console.log('name: ', nameField.current.value, 'email :', emailField.current.value);
    }


    return(
        <div>

            <h2>Uncontrolled Form</h2>
            <form action="" onSubmit={handleForm}>
                <input type="text" ref={nameField} placeholder="name" />
                <br />
                <input type="text" ref={emailField} placeholder="email" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}