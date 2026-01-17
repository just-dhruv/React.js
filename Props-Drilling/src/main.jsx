import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StateLifting from './StateLifting.jsx'
import ShareState from './ShareState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShareState />
    <StateLifting />
    {/* <App /> */}
  </StrictMode>,
)
