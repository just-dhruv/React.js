import { useState } from "react"

export default function MultiInputForm(){

    const [ formData, setFormData ] = useState({
        name: 'Dhruv',
        email: 'dhruv@test.com',
        age : 23
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
    }

    const  handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value
            
        }))
    }

    return(
        <>
            <h2>Multiple Input form</h2>
            <form action="" onSubmit={handleSubmit}>

                <input type="text"
                    name="name"
                    value={formData.name} onChange={handleChange} placeholder="Name"/>
                <br />

                <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email"/>

                <br />
                <input type="number" name="age" onChange={handleChange} value={formData.age} placeholder="Age"/>

                <br />
                <button type="submit">Submit</button>
            
            </form>
        </>
    )

}