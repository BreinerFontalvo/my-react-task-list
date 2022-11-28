import "./Tareas.css"
import { BotonesDelet } from './BotonDelet';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react'
export const ListaTarea = (props) => {
    let {id} = props;
    const[Marcado ,setMarcado]= useState(false)
    const[clase ,setClase]= useState('Marcador-Tareas')
    const[value ,setValue]= useState()
    const [form, setForm] = useState(false);
    const Complete =()=>{
        if (Marcado) {
            setMarcado(false)
            setClase('Marcador-Tareas')
        }else{
            setMarcado(true)
            setClase("Nuevo-marcador")
        }
    }
    const editarTarea= (dato,tarea)=>{
        for (const i in localStorage) {
            if (localStorage[i] == tarea) {
                localStorage [id] = dato
                window.location.reload()
            }
            console.log(tarea,dato);
        }
    }
return (
    <div className="Container-Tareas">
        <article className="Lista-Tareas">
        <input onChange={Complete} checked={Marcado} className={clase} type="checkbox" name="Marcador"  color='red' />
        <div className="Lista-Tareas" id={clase}>
        {props.tarea}
        </div>
        <button onClick={() => {if (!form) {setForm(true);} else {setForm(false);}}}className='BotonEdit'>
        <FiEdit/>
        </button>
        <BotonesDelet  eliminar ={<RiDeleteBin6Line/>} id={id}/>
        </article>
        <article>
        {form ? (
        <form onSubmit={(e)=> { 
            e.preventDefault();
            editarTarea(value,props.tarea)
            setForm(false)
        }}
        action="" >
            <input className="EditorDeTarea" type="text" defaultValue={props.tarea.dato} onChange={(e)=>{
            setValue(e.target.value);
            }}/>
            <button type="submit">editar</button>
        </form>
        ) : (
            ""
            )}

        </article>
    </div>
)
}
