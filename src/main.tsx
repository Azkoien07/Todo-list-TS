import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css'
import Tarea from '@/components/Tarea'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tarea />
  </StrictMode>,
)
