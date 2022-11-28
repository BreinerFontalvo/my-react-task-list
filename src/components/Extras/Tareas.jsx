import React from 'react'
import Header from "../Header/Header";
import "../../App.css";
import { TaskForm } from "../TaskForm/TaskForm";
import Task from "../Task/Task";
import useTasks from "../../hooks/useTasks";

export const Tareas = () => {

    const { handleOnSubmit, tasks } = useTasks();

    return (
        <div className="container">
        <Header handleOnSubmit={handleOnSubmit} />
        <TaskForm tasks={tasks} />
        <Task />
        </div>
    );
}
export default Tareas;
