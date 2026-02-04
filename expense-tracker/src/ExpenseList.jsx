import { useState, useEffect } from "react"
import ExpenseItem from "./ExpenseItem"


function ExpenseList({expenses, onDelete}) {
    if(expenses.length === 0){
        return <p className="no-expense">Currently no expenses</p>
    }
    return (

        <div className="expense-list">
            {
                expenses.map((item) => (
                    <ExpenseItem key={item.id} onDelete={onDelete} item={item}  />

                ))
            }

        </div>
    )
}

export default ExpenseList

// import { useState, useEffect } from "react"
// import ExpenseItem from "./ExpenseItem"


// function ExpenseList({expenses, onDelete}) {
//     if(expenses.length === 0){
//         return <p className="no-expense">Currently no expenses</p>
//     }
//     return (

//         <div className="expense-list">

//             <ExpenseItem expenses={expenses} onDelete={onDelete}  />

//         </div>
//     )
// }

// export default ExpenseList