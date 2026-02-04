import { useState, useEffect, useRef } from "react"

function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const titleRef = useRef();
    // const [id, setId] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !amount) return alert('Fill the details!'); // for validation if any of one value is there then only send the data next
        const expenseData = {
            // id,
            id : Date.now(),
            title,
            amount: parseFloat(amount) // use Number() to conver amount into number, parseFloat() save the number in 25.00 format
        }

        // console.log(expenseData);
        // setId(prev => prev + 1); // id increasing
        onAddExpense(expenseData); // send data to parent

        setTitle('');
        setAmount('');
        titleRef.current.focus(); // to set the cursor on title automarically on form submission
    }
    return (

        <form className="expense-form" onSubmit={handleSubmit}>

            <input placeholder="Expense Title" type="text" ref={titleRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

            <input placeholder="Amount ₹" type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} />

            <button type="submit">Add Expense</button>

        </form>
    )
}

export default ExpenseForm