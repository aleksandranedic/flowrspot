import { markFavoriteFlower, unmarkFlowerFavorite } from "../fetch-data/services/flowerService";
import { backlink } from "../utils/Constants";

export interface FlowerList {
  flowers: Flower[];
}

export interface FlowerData {
  flower: Flower;
}

export interface FlowerDetails {
  flower: {
    description: string,
    favorite: boolean,
    features: string[],
    id: number,
    latin_name: string,
    name: string, 
    profile_picture: string,
    sightings:number
  }
};

export interface Flower {
  id: number;
  name: string;
  latin_name: string;
  sightings: number;
  profile_picture: string;
  favorite: boolean;
}

export interface FavoriteFlower {
  fav_flowers: {
    flower: Flower,
    id:number,
    user_id:number
  }[]
}

export function setFavorite(id: number, favorite:boolean, favorite_id:number) {
  if (favorite) {
    unmarkFlowerFavorite(backlink +  `flowers/${id}/favorites/${favorite_id}`)
  }
  else {
    markFavoriteFlower( backlink + `flowers/${id}/favorites`);
  }
}
