import './TaskLista.css'
import { Impus } from '../ImpusTaskLista/Impus'
import { ListaTarea } from '../TareasLista/ListaTarea';
import { useState } from 'react';
export const TaskLista = () => {
    const[lista ,setLista]= useState([])
    for (const key in localStorage) {
        if (!isNaN(key)) {
            lista.push(localStorage[key]) 
        }

    }
    const buscarid= (dato)=>{
        for (const i in localStorage) {
            if (localStorage[i]== dato) {
                return i
            }
            
        }
    }
    const eliminartodo=(dato)=>{
        localStorage.clear(dato)
        window.location.reload()
    }
return (
    <div className='TaskLista'>
        <h1>TodoLista</h1>
        <div className='ContainerTareaPorHacer'>
        <Impus/>
        {lista.map((index ,clave )=>{
            return <ListaTarea key={clave} tarea={index} id={buscarid(index)}/>
        })}
        </div>
        <div className='EliminarTodo_Container'>

        <button onClick={eliminartodo} className='EliminarTodo'>Eliminar Todo</button>
        </div>
    </div>
)
}
