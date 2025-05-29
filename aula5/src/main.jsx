import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Menu from "./components/Menu"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <Menu/>
  </StrictMode>,
)
