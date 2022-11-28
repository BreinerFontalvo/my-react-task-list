import './Tareas.css'
import { useState,useEffect} from 'react'
export const BotonesDelet = (props) => {
    const delet =(e)=>{
        localStorage.removeItem(props.id)
        window.location.reload()
    }
return (
    <>
    <button onClick={delet} className='BotonesDelet'>{props.eliminar}</button>
    </>
)
}
