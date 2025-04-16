import { useState } from 'react'
import '@styles/App.css'
import '@styles/global.css';
import TareaType from '@type/tareaType';

export default function Tarea() {
    const [tareas, setTareas] = useState<TareaType[]>([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = (e: React.FormEvent) => {
        e.preventDefault();
        if (nuevaTarea.trim() === '') return;
        
        const tarea: TareaType = {
            id: Date.now(),
            texto: nuevaTarea,
            completada: false
        };
        
        setTareas([...tareas, tarea]);
        setNuevaTarea('');
    };

    const eliminarTarea = (id: number) => {
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-6xl font-bold text-center mb-4'>Todo List</h1>
            <p className='text-center mb-4'>Agrege sus tareas</p>
            <form onSubmit={agregarTarea} className='flex flex-col items-center justify-center'>
                <input 
                    className='border-2 border-gray-300 rounded-md p-2 mb-4' 
                    type="text" 
                    placeholder="Add a new task"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button 
                    className='bg-blue-500 text-white p-2 rounded-md w-full mb-4' 
                    type='submit'
                >
                    Add
                </button>
            </form>
            <div className='w-full max-w-md'>
                {tareas.map(tarea => (
                    <div key={tarea.id} className='flex justify-between items-center p-2 border-b'>
                        <span>{tarea.texto}</span>
                        <button 
                            className='bg-red-500 text-white p-2 rounded-md'
                            onClick={() => eliminarTarea(tarea.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}