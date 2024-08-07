import axios from "axios";

const baseURL = "/api";
const headers = { Authorization: `Bearer ${localStorage?.getItem("token")}` };

export const unProtectedRequest = axios.create({ baseURL });
export const protectedRequest = axios.create({
  baseURL,
  headers,
});

export const createAccount = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  const { data } = await unProtectedRequest.post("/auth/signup", payload);
  return data;
};

export const loginAccount = async (payload: {
  email: string;
  password: string;
}) => {
  const { data } = await unProtectedRequest.post("/auth/signin", payload);
  return data;
};
