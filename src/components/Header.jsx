import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import "./Header.css";
import { useState } from "react";

export const Header = (props) => {
    const [lista, setLista] = useState("");
    const [error, setError] = useState(false)
    /*GUARDAR DATOS DE DESCRIPTION*/
    const [guardar, setGuardar] = useState("");

    /*AGREGAR Y GUARDAR TAREA*/
    const onSubmit = (e) => {
        e.preventDefault();
        props.handleOnSubmit(lista, guardar);
        setLista('');
        setGuardar('');
        }

    //INICIO GUARDAR TAREAS HEADER
    return (
        <div className="Header">
        <h1>LISTA DE TAREAS</h1>
        <form onSubmit={onSubmit} className="formu">
            <input
            type="text" 
            placeholder="Agregar nueva tarea"
            value={lista}
            onChange={(e) => {
            setLista(e.target.value);
            setError(false);
            if(e.target.value.length < 3) {
                setError(true)
            }
            }}
            />
            <button className="IconName">
            <AiOutlinePlus className="add" />
            </button>
            <input 
            type="text" 
            className="descripcion" 
            placeholder="Agregar una descripción"
            value={guardar}
            onChange={(e) => {
                setGuardar(e.target.value);
                console.log(guardar)
            }}/> 
                

        </form>
            
            {
                error ? (
                    <span>muy corta</span>
                    ):(<></>)
                }
        </div>
    );
};

export default Header;

