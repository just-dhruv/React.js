import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import NewTodo from './NewTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Todo /> */}
     <NewTodo />
    </>
  )
}

export default App
