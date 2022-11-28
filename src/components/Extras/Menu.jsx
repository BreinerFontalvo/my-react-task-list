import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css';



export const Menu = () => {
    return (
        <div className="Menu">
        <Link to="./Home">Home</Link>
        <Link to="./SobreNosotros">Sobre Nosotros</Link>
        <Link to="./Tareas">Tareas</Link>
        </div>
    );
}
export default Menu;