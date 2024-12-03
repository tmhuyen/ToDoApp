import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks &&
          tasks.map((task) => {
            return (
              <div className="container">
                <li key={task.id}> {task.title} </li>
                <button className="status-btn"> Complete </button>
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default TaskList;
