import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css'
import App from '@components/App'
import Tarea from '@components/Tarea'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Tarea />
  </StrictMode>,
)
