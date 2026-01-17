import { useState } from "react";

function UserProfile() {
    const [name,setName] = useState("Dhruv Dhameliya");
    const [age,setAge] = useState(22);

    return (
        <>
            <h1>User Name : {name} </h1>
            <h2>User Age: {age}</h2>

            <button onClick={() => setName('Just Dhruv')}>Change Name</button>
            <button onClick={() => setAge(27)}>Change Age</button>
        </>
    )
}

export default UserProfile;