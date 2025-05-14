import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Change from './componentes/Change'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Change/>
  </StrictMode>,
)
