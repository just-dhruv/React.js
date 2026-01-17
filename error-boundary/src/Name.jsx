import React from 'react'

function Name({user}) {
    // if (!Array.isArray(user)) return <p>Loading...</p>
    return (
        <div>
            <h1>Post Title</h1>
            {user.map((u) => (
                <li key={u.id}>{u.title}</li>
            ))}
        </div>
    )
}

export default Name