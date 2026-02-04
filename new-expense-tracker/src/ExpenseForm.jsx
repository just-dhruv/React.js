import { useReducer, useRef, useState } from 'react'

function ExpenseForm({ formSubmit }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const titelRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount) return alert('Fill the details');
        const formData = {
            id: Date.now(),
            title,
            amount: parseFloat(amount)
        }

        formSubmit(formData);
        setTitle('');
        setAmount('');
        titelRef.current.focus();
    }

    return (
        <form className="expense-form" onSubmit={handleSubmit}> 
            <input placeholder="Expense Title" type="text"
                value={title} ref={titelRef}
                onChange={(e) => setTitle(e.target.value)}

            />

            <input placeholder="Amount ₹" type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <button type="submit">Add Expense</button>
        </form>
    )
}

export default ExpenseForm