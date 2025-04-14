import { useState } from 'react'
import '@styles/App.css'
import '@styles/global.css'; 

function Tarea() {
    const [count, setCount] = useState(0)
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-6xl font-bold text-center mb-4'>Todo List</h1>
            <p className='text-center mb-4'>Agrege sus tareas</p>
            <form className='flex flex-col items-center justify-center' method='post'>
                <input className='border-2 border-gray-300 rounded-md p-2 mb-4' type="text" placeholder="Add a new task" />
                <button className='bg-blue-500 text-white p-2 rounded-md w-full mb-5'>Add</button>
            </form>
            <button className='bg-red-500 text-white p-2 rounded-md w-full'>Delete</button>
        </div>
    )
}
export default Tarea;