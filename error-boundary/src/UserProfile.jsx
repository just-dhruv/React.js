import React from 'react'

function UserProfile({user}) {
    // if (!Array.isArray(user)) return <p>Loading...</p>
    return (
        <div>
            {user.map((u) => (
                <li key={u.id}>{u.name}</li>
            ))}
        </div>
    )
}

export default UserProfile