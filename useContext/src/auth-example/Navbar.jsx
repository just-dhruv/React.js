import { useContext } from 'react'
import { AuthContext } from './AuthContext'

const Navbar = () => {
    const { isLoggedIn, login, logout } = useContext(AuthContext);

    return(
        <nav>
            {isLoggedIn ? (
                <button onClick={logout}>Log Out</button>
            ) : (
                <button onClick={login}>Log In</button>
            )}
        </nav>
    )
}

export default Navbar