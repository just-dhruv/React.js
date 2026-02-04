import React, { useState } from 'react'

function NewTodo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { text: todo, completed: false }]);
            setTodo('');
        }
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Add Todo'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />

                <button type='submit'>Add</button>
            </form>

            <ul>
                {todos.map((value, index) => (
                    <li key={index} style={{ display: value.completed ? 'none' : 'block' }}>
                        <span >{value.text}</span>
                        <button type='button' onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NewTodo