import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Props from './componentes/Props'
import Card from "./componentes/Card"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Props nome={"Rafael"} newname={"Novo nome"}/>
    <Card/>
  </StrictMode>,
)
