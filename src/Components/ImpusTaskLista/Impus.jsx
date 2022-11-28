import { useState } from "react"
import "./impus.css"
export const Impus = () => {

    const [newTarea, setnewTarea ] = useState()
    
    const handlsubmit = (e) => {

        if (newTarea == undefined || newTarea == ' ') {
            alert("Porfavor Agrege Alguna Tarea")   
        }else{
            let verificacion = true
            for (const i in localStorage) {
                if (!isNaN(i)) {
                    if (newTarea == localStorage[i]) {
                        verificacion = false
                    }
                }
            }

            if (verificacion) {

            e.preventDefault();
            let tareas = localStorage.length +1;
            localStorage.setItem(tareas, newTarea);
            setnewTarea("");
            window.location.reload() 

            }else{
                
                alert("la tarea ya existe")
                        
            }  
    }
    }

    return (
    <div className='imput-Tarea'>
        <form onSubmit={handlsubmit}>
        <input onChange={(e)=> setnewTarea(e.target.value)} className="Imput-TaskLista" placeholder="Escribe Tu Tarea" type="text" name="Tarea" id="" />
        <button className="Button-TaskLista">+</button>
        </form>
    </div>
)
}
