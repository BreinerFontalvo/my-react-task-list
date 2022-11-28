import React from "react";
import { List } from "../List/List";
import "../List/List.css";
export const TaskForm = ({ tasks }) => {
  if (tasks.length === 0) {
    return (
      <div className="caj1">
        <h4 className="not-task">No tasks yet</h4>
      </div>
    );
  }
  return (
    <div className="caj2">
      {tasks.map((task) => (
        <List task={task} key={task.name} description={task.description} />
      ))}
    </div>
  );
};

export default TaskForm;
