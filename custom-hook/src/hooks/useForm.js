import { useState } from "react";


export default function useForm(initialValue = {}, callback) {
    const [values, setValues] = useState(initialValue);

    // handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (callback) callback(values);
    }

    // reset the form
    const resetForm = () => setValues(initialValue);

    return {
        values, handleChange, handleSubmit, resetForm
    }
}