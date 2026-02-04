import React, { useState } from 'react'

function Todo() {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submit');

        if (newTodo) {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed // set the completet value false to true
        setTodos(newTodos); // update the todo list 
    }

    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Add Todo'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)} />

                <button type='submit'>Add</button>
            </form>
            <div>
                <ul>
                    {
                        todos.map((value, index) => (
                            <li key={index}>
                                <span
                                    style={{
                                        textDecoration: value.completed ? 'line-through' : 'none',
                                    }}
                                >{value.text}</span>
                                <button type='button' onClick={() => handleDelete(index)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todo