import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FirstForm from './Components/FirstForm'
import FormSelect from './Components/FormSelect'
import FormState from './Components/FormState'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FirstForm/>
  <FormSelect/>
  <FormState/>
  </StrictMode>,
)
