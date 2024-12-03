import { apiClient } from "./axios";

export const login = async (username, password) => {
  const response = await apiClient.post("/auth/login", { username, password });
  return response.data;
};

export const getInfo = async () => {
  const response = await apiClient.get("/user/myInfo");
  return response.data;
}