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