import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './components/context/UserContext.jsx'
import { AuthContextProvider } from './components/context/AuthContext.jsx'



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      
      <BrowserRouter>

        <App />

      </BrowserRouter>
      
    </UserProvider>
  </React.StrictMode>,
)
