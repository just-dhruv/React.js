import { useState, useEffect } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
  const [expense, setExpense] = useState(() => {
    const saved = localStorage.getItem("Expense")
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("Expense", JSON.stringify(expense));
  }, [expense])

  const expenseData = (e) => {
    setExpense((prev) => [...prev, e]);
  }

  const handleDelete = (id) => {
    setExpense((prev) => prev.filter(item => item.id !== id));
  }

  const total = expense.reduce((sum, item) => sum = sum + item.amount, 0);

  return (
    <>
      <div className="app-container">
        <h1>💰 Expense Tracker</h1>

        <ExpenseForm formSubmit={expenseData} />

        <h3 className="total">Total Expense: ₹{total.toFixed(2)}</h3>

        <ExpenseList onDelete={handleDelete} expense={expense} />
      </div>
    </>
  )
}

export default App
