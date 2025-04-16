import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css'
import Tarea from '@/components/Tarea'
import UserCard from '@/components/UserCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tarea />
    <UserCard name='Julian' age={46} />
  </StrictMode>,
)
