import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChangeBC from "./components/ChangeBC"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ChangeBC/>
  </StrictMode>,
)
