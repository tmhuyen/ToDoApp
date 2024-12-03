import React from "react";
import { useState } from "react";

const FilterTask = ({ tasks }) => {
  const [search, setSearch] = useState("");
  const [filterTasks, setFilterTasks] = useState([]);
  const handleOnChange = (e) => {
    setSearch(e.target.value);
    setFilterTasks(
      tasks.filter((task) => {
        return task.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleOnChange}
      />
      {filterTasks.map((task) => {
        return <li key={task}>{task}</li>;
      })}
    </>
  );
};

export default FilterTask;
