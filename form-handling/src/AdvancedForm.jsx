import { useState } from "react"

export default function AdvancedFrom(){

    const [ advanceData, setAdvanceData ] = useState({
        gender: '',
        country: 'India',
        agree: false
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log(advanceData);
    }
    
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setAdvanceData((pre) => ({
            ...pre,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    return(
        <div>
            <h2>Advanced Form</h2>

            <form onSubmit={handleSubmit}>

                <label htmlFor="">
                    <input type="radio" name="gender" value="male" checked={advanceData.gender === "male"} onChange={handleChange} />
                    Male
                </label>

                <label htmlFor="">
                    <input type="radio" name="gender" value="female" checked={advanceData.gender === "female"} onChange={handleChange}  />
                    Female
                </label>

                <br />
                <br />

                <label htmlFor="">
                    Country

                    <select name="country" value={advanceData.country} onChange={handleChange}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </label>

                <br />
                <br />
                <label htmlFor="">
                    <input type="checkbox" name="agree" checked={advanceData.agree} onChange={handleChange}/>
                    I agree to the terms and conditions
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}