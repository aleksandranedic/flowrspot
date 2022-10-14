import { AxiosResponse } from "axios";
import { FavoriteFlower, FlowerDetails, FlowerList } from "../../model/FlowerInterface";
import { Pagination } from "../../model/Pagination";
import { http } from "../axios-wrapper/http";

export type flowerData = FlowerList & Pagination;

export type favoriteFlowerData = FavoriteFlower & Pagination

export const fetchFlowers = async (url: string): Promise<AxiosResponse> => {
  return await http.get<flowerData, Promise<AxiosResponse>>(url);
};

export const fetchFavoriteFlowers = async (url: string): Promise<AxiosResponse> => {
  return await http.get<flowerData, Promise<AxiosResponse>>(url);
};

export const markFavoriteFlower = async (url: string): Promise<AxiosResponse> => {
  return await http.post(url);
};

export const unmarkFlowerFavorite = async (url:string): Promise<AxiosResponse> => {
  return await http.delete(url);
};

export const fetchFlowerDetails = async (url:string): Promise<AxiosResponse> => {
  return await http.get<FlowerDetails, Promise<AxiosResponse>>(url);
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
