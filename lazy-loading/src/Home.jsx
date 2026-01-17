import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate();
    const GotoAbout = () => {
        navigate("/about");

    }
   return(
     <>
        <h1>Home page</h1>

        <button onClick={GotoAbout}>Goto About Page</button>
    </>
   )
}

export default Home