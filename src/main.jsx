import { CssVarsProvider } from '@mui/joy'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>
)