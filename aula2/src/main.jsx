import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Change from './componentes/Change'
import Titulo from './componentes/Titulo'
import Conditional from './componentes/Conditional'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Change/>
    <Titulo/> */}
    <Conditional/>
  </StrictMode>,
)
