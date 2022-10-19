import { AxiosResponse } from "axios";
import { Pagination } from "../../model/Pagination";
import { SightingCommentData, SightingDetailsData, SightingList } from "../../model/SightingInterface";
import { http } from "../axios-wrapper/http";

export type sightingData = SightingList & Pagination;
export type sightingDetailsData = SightingDetailsData & Pagination
export type sightingCommentsData = SightingCommentData & Pagination
export type addCommentData = {
  content: string
}

export const fetchUserSighting = async (url: string): Promise<AxiosResponse> => {
  return await http.get<sightingData, Promise<AxiosResponse>>(url);
};

export const fetchSightingInfo = async<T> (url: string):Promise<AxiosResponse<T>> => {
  return await http.get<T, Promise<AxiosResponse<T>>>(url);
}
export const getSightings = async (url:string): Promise<AxiosResponse> => {
  return await http.get<sightingDetailsData ,Promise<AxiosResponse>>(url);
};

export const fetchFlowerSighting = async (url: string): Promise<AxiosResponse> => {
  return await http.get<sightingDetailsData, Promise<AxiosResponse>>(url);
};

export const addSighting = async (url: string, data:FormData): Promise<AxiosResponse> => {
  return await http.post(url, data)
}
export const fetchSightingComments = async (url: string): Promise<AxiosResponse> => {
  return await http.get<sightingCommentsData, Promise<AxiosResponse>>(url);
}; 

export const addComment = async (url: string, data:addCommentData): Promise<AxiosResponse> => {
  return await http.post(url, data)
}
/*export const createUser = async (user: User): Promise<User> => {
  return await http.post<User>("/users", user);
};

export const updateUser = async (user: User): Promise<User> => {
  return await http.put<User>(`/users/${user.id}`, user);
};

export const deleteUser = async (user: User): Promise<User> => {
  return await http.delete<User>(`/users/${user.id}`);
};*/
