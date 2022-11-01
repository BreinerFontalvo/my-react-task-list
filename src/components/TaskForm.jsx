import React from 'react'
import { List } from './List';
export const TaskForm = ({tasks} ) => {

    return (
        <div>
            {
            tasks.map((task) => (
                <List task={task} key={task.name} />
            ))
            }
        </div>
        );
    }

export default TaskForm;