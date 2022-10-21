import { AxiosResponse } from "axios";
import { LoginInfo, RegisterInfo, UserInfo } from "../../model/UserInfo";
import { http } from "../axios-wrapper/http";

export const loginUser = async (
  url: string,
  loginInfo: LoginInfo
): Promise<AxiosResponse> => {
  return await http.post<LoginInfo, Promise<AxiosResponse>>(url, loginInfo);
};

export const registerUser = async (
  url: string,
  registerInfo: RegisterInfo
): Promise<AxiosResponse> => {
  return await http.post<RegisterInfo, Promise<AxiosResponse>>(
    url,
    registerInfo
  );
};

export const infoAboutLogedUser = async (
  url: string
): Promise<AxiosResponse> => {
  return await http.get<Promise<AxiosResponse>>(url);
};

export const fetchUser = async(url:string):Promise<AxiosResponse> => {
  return await http.get<UserInfo, Promise<AxiosResponse>>(url);
}
