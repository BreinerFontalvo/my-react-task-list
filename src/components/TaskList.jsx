import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import React from "react";
import "./TaskList.css";
export const TaskList = () => {
        return (
        <div className="task">
            <form>
            <label>
                <div class="list">
                <input type="radio" name="task"></input>
                Buy a new laptop
                <BiEdit className="icono1" />
                <BiTrash className="icono2" />
                </div>

                <div class="list">
                <input type="radio" name="task" />
                Buy a new laptop
                <BiEdit className="icono1" />
                <BiTrash className="icono2" />
                </div>

                <div class="list">
                <input type="radio" name="task" /><del>Buy a new laptop</del>
                
                <BiEdit className="icono1" />
                <BiTrash className="icono2" />
                </div>

                <div class="list">
                <input type="radio" name="task" /><del>Buy a new laptop</del>
                <BiEdit className="icono1" />
                <BiTrash className="icono2" />
                </div>
            </label>
            </form>
        </div>
    );
    };
export default TaskList;
