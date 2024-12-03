import React, { useEffect, useState } from "react";
import { getTasks } from "../apis/task";
import FilterTask from "../components/filterTask";
import TaskList from "../components/taskList";
import AddTask from "../components/addTask";

const TaskPage = () => {
  const [tasks, setTasks] = useState([{ title: "" }]); 
  const [task, setTask] = useState("");

  useEffect(() => {
    const tasks = async () => {
      const tasksFromServer = await getTasks();
      setTasks(tasksFromServer);
    };
    tasks();
  }, []);

  return (
    <>
      <FilterTask tasks={tasks} />
      <TaskList tasks={tasks} />
      <AddTask
        tasks={tasks}
        task={task}
        setTask={setTask}
        setTasks={setTasks}
      />
    </>
  );
};

export default TaskPage;
