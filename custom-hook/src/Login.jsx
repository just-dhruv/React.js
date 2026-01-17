import useForm from "./hooks/useForm"

export default function Login(){

    const initialValues = {
        email: "",
        password: ""
    }

    const onSubmit = (values) => {
        console.log("Form submitted: ", values); // in real here goes the form data to save in api or database on the form submit
    }


    const { values, handleChange, handleSubmit, resetForm } = useForm(initialValues, onSubmit);

    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <input type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange} />
                    <br />

            <input type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange} />
                    <br />

            <button type="submit">submit</button>
            <button onClick={resetForm}>Reset</button>
        </form>
    )
}