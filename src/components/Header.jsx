import { AiOutlinePlus} from "react-icons/ai";
import React from 'react'
import "./Header.css";

export const Header = () => {
    return (
    <div className="Header">
        <h1>Todo App</h1>
        <div class="caja1">
        <input type="text" placeholder="Add your new todo"></input>
        <button className="IconName">
            <AiOutlinePlus />
        </button>
        </div>
    </div>
);
}
export default Header;
