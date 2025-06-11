import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contador from "./Components/Contador.jsx"
import Lista1 from "./Components/Lista1.jsx"
import Lista2 from "./Components/Lista2.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Contador/>
    <Lista1/>
    <Lista2/>
  </StrictMode>,
)
