import axios from "axios";
import { SignInForm, SignUpForm } from "./utils";

const baseURL = "/api";
const headers = { Authorization: `Bearer ${localStorage?.getItem("token")}` };

export const unProtectedRequest = axios.create({ baseURL });
export const protectedRequest = axios.create({
  baseURL,
  headers,
});

export const createAccount = async (payload: SignUpForm) => {
  const { data } = await unProtectedRequest.post("/auth/signup", payload);
  return data;
};

export const loginAccount = async (payload: SignInForm) => {
  const { data } = await unProtectedRequest.post("/auth/signin", payload);
  return data;
};
