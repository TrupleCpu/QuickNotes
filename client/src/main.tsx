import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppContextProvider } from './Components/Context/AppContextProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
