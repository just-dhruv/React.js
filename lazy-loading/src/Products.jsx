import { Link, Outlet } from 'react-router-dom'

export default function Products() {
    return(
        <>
            <h1>Product Page</h1>

            <ul>
                <li>
                    <Link to='phone'>Phone List </Link>
                </li>
                <li>
                    <Link to='tablet'>Tablet List</Link>
                </li>
            </ul>
       <Outlet />
        </>
    )
}