import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeChange from './ThemeChange.jsx'

import Navbar from './auth-example/Navbar.jsx'
import { AuthProvider } from './auth-example/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <Navbar/>
    </AuthProvider>

    {/* <ThemeChange /> */}
    {/* <App /> */}
  </StrictMode>,
)
