import { apiClient } from "./axios";

export const getTasks = async () => {
  const response = await apiClient.get("/todos");
  return response.data;
};

export const addTask = async (task) => {
  const response = await apiClient.post("/todos", task);
  return response.data;
};

