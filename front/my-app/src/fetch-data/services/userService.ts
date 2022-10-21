import { AxiosResponse } from "axios";
import { FavoriteFlower, FavoriteFlowerData, FlowerDetailsData } from "../../model/FlowerInterface";
import { Pagination } from "../../model/Pagination";
import { LoginInfo, RegisterInfo, UserInfo } from "../../model/UserInfo";
import { http } from "../axios-wrapper/http";

export type favoritesData = FavoriteFlower & Pagination;

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

export const fetchUserFavorites = async (url: string) => {
  const response = await http.get<favoritesData, Promise<AxiosResponse>>(url);
  const favFlowerObj = {
    favFlowers: setFlowers(response.data.fav_flowers),
    currPage: response.data.meta.pagination.current_page,
    totalPages: response.data.meta.pagination.total_pages,
  }
  return favFlowerObj;
};

const setFlowers = (favFlowers: FavoriteFlowerData[]) : FlowerDetailsData[] => {
  const flowers:FlowerDetailsData[] = []
  favFlowers.forEach((item:FavoriteFlowerData) => {item.flower.favoriteId = item.id; flowers.push(item.flower)});
  return flowers;
}