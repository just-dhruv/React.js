
function ExpenseItem({ item, onDelete }) {
    
    return (
        <div className="expense-item">
            <span>{item.title}</span>
            <span>₹{item.amount}</span>
            <button onClick={() => onDelete(item.id)}>❌</button>
        </div>
    )
}

export default ExpenseItem



// function ExpenseItem({ expenses, onDelete }) {
    
//     return (
//        <>
//          {
//             expenses.map((exp, id) => (
//                 <div className="expense-item" key={exp.id}>
//                     <span>{exp.title}</span>
//                     <span>₹{exp.amount}</span>
//                     <button onClick={() => onDelete(exp.id)}>❌</button>
//                 </div>

//             ))
//         }
//        </>
//     )
// }

// export default ExpenseItem