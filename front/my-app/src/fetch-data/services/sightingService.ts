import { AxiosResponse } from "axios";
import { Pagination } from "../../model/Pagination";
import { SightingList } from "../../model/SightingInterface";
import { http } from "../axios-wrapper/http";

export type sightingData = SightingList & Pagination;

export const getUserSighting = async (url: string): Promise<AxiosResponse> => {
  return await http.get<sightingData, Promise<AxiosResponse>>(url);
};

/*export const createUser = async (user: User): Promise<User> => {
  return await http.post<User>("/users", user);
};

export const updateUser = async (user: User): Promise<User> => {
  return await http.put<User>(`/users/${user.id}`, user);
};

export const deleteUser = async (user: User): Promise<User> => {
  return await http.delete<User>(`/users/${user.id}`);
};*/
