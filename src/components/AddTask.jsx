import React from "react";
import { addTask } from "../apis/task";

const AddTask = ({ tasks, task, setTasks, setTask }) => {
  const handleOnChange = (e) => {
    setTask(e.target.value);
  };
  const handleOnClick = () => {
    setTasks([...tasks, {title: task}]);
    const respone = addTask({ title: task });
    console.log(respone);
    setTask("");
  };
  return (
    <>
      <input type="text" value={task} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Add Task</button>
    </>
  );
};

export default AddTask;
