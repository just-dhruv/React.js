import { useState, useEffect } from "react"
import './App.css'
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"


function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('Expense')
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('Expense', JSON.stringify(expenses));
  }, [expenses]);


  
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
    // console.log(expense); // expense data comes from form component
  }

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter(item => item.id !== id)); // check the main list (expenses) id with we want to delete the list id and if it is not same then the filter will add them into new array so that way the deleted list will remove from the list and we get new array of the list in setExpenses function
  }

  const total = expenses.reduce((sum, item) => sum + item.amount, 0 );

  return (
    <>
      <div className="app-container">
        <h1>💰 Expense Tracker</h1>

        <ExpenseForm onAddExpense={addExpense} />

        <h3 className="total">Total Expense: ₹{total.toFixed(2)}</h3>

        <ExpenseList expenses={expenses} onDelete={deleteExpense} />

      </div>
    </>
  )
}

export default App
