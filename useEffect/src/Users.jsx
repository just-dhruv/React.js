import { useState, useEffect } from 'react'

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    },[])
    return(
        <>
            <h1>Users List</h1>
            <ul>
                {users.map((n) => (
                    <li key={n.id}>{n.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Users