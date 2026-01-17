import { createContext, useContext } from "react"

const userCount = createContext();

function App() {

  const user1 = {
    name : "Dhruv Dhameliya",
    age : "22"
  };
  return (
    <>
      <userCount.Provider value={user1}>
        <Parent />
      </userCount.Provider>
    </>
  )
}

function Parent(){

  return <Chiled />
}

function Chiled(){
  const { name, age } = useContext(userCount);
  return (
    <>
      <h1 style={{color:"red",fontSize:"40px"}}>Name : {name}</h1>
      <h2>Age: {age}</h2>
      <Granchiled />
    </>
  )
}

function Granchiled(){
  const { name, age} = useContext(userCount);
  return <h3>My name is {name}</h3>
}







export default App
