import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import "./Header.css";
import { useState } from "react";

export const Header = (props) => {
    console.log(props)
    const [lista, setLista] = useState(" ");
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.createLista(lista);
        setLista('');
    };

    //inicio para agregar tarea
    return (
        <div className="Header">
        <h1>Todo App</h1>
        <form onSubmit={onSubmit} className="formu">
            <input
            type="text" 
            placeholder="Add your new todo"
            value={lista}
            onChange={(e) => {
            setLista(e.target.value);
            }}
            />
            <button className="IconName">
            <AiOutlinePlus />
            </button>
        </form>
        </div>
    );
};

export default Header;

