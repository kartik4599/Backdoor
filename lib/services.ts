import axios from "axios";
import { CreateOrganizationForm, SignInForm, SignUpForm } from "./utils";
import { OrganizationQuery } from "@/hooks/use-organization";

const baseURL = "/api";

export const unProtectedRequest = axios.create({ baseURL });
export const protectedRequest = () => {
  const headers = { Authorization: `Bearer ${localStorage?.getItem("token")}` };
  return axios.create({
    baseURL,
    headers,
  });
};

// auth routes
export const createAccount = async (payload: SignUpForm) => {
  const { data } = await unProtectedRequest.post("/auth/signup", payload);
  return data;
};

export const loginAccount = async (payload: SignInForm) => {
  const { data } = await unProtectedRequest.post("/auth/signin", payload);
  return data;
};

export const getOwnData = async () => {
  const { data } = await protectedRequest().get("/auth/me");
  return data;
};

// organization routes
export const getOrganization = async ({
  page,
  search,
  size,
}: OrganizationQuery) => {
  const { data } = await unProtectedRequest.get("/organization", {
    params: { search, page, size },
  });
  return data.data;
};

export const joinOrganization = async (id: number) => {
  const { data } = await protectedRequest().post(`/organization/${id}`);
  return data;
};

export const createOrganization = async (payload: CreateOrganizationForm) => {
  const { data } = await protectedRequest().post(`/organization`, payload);
  return data;
};
