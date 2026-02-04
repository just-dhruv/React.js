

function ExpenseList({ expense, onDelete }) {
    if (expense.length == 0) return <p className="no-expense">Currently no expense</p>;
    return (
        <div className="expense-list">
            {
                expense.map((item) => (
                    <div className="expense-item" key={item.id}>
                        <span>{item.title} </span>
                        <span>₹{item.amount}</span>
                        <button onClick={() => onDelete(item.id)}>❌</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ExpenseList