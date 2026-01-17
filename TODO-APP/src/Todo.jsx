import { useState } from "react"

function Todo(){

    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleSubmite = (e) => {
        e.preventDefault();
        if(newTodo){
            setTodos([...todos, {text:newTodo, completed: false}])
            setNewTodo("")
        }
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos);

    }

    return(
        <>
            <h1>To Do App</h1>
                <form onSubmit={handleSubmite}>
                    <input 
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Enter a new task..."
                        />

                    <button type="submit">Add</button>

                </form>


            <ul>
                {todos.map((list, index) => (
                    <li style={{ textDecoration: list.completed ? 'line-through' : 'none'}} key={index}>
                        {list.text}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        
        </>
    )
}

export default Todo