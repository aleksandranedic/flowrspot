import { AxiosResponse } from "axios";
import {LoginInfo, RegisterInfo} from "../../model/UserInfo";
import { http } from "../axios-wrapper/http";


export const loginUser = async (url:string, loginInfo: LoginInfo): Promise<AxiosResponse> => {
  return await http.post<LoginInfo, Promise<AxiosResponse>>(url, loginInfo);
};

export const registerUser = async (url:string, registerInfo: RegisterInfo): Promise<AxiosResponse> => {
    return await http.post<RegisterInfo, Promise<AxiosResponse>>(url, registerInfo);
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