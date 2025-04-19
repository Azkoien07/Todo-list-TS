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
            estado: false
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
                    <div key={tarea.id} className='flex justify-between items-center p-4 mb-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
                        <div className="flex items-center gap-4 w-full">
                            <span className='text-xs font-medium text-gray-400'>{tarea.id}</span>
                            <span className={`flex-grow ${tarea.estado ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                                {tarea.texto}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${tarea.estado
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {tarea.estado ? 'Completada' : 'Pendiente'}
                            </span>
                        </div>
                        <button
                            className='ml-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-colors duration-200'
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