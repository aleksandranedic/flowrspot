export interface FlowerList {
  flowers: FlowerDetailsData[];
}

export interface FlowerData {
  flower: FlowerDetailsData;
}

export interface FlowerDetails {
  flower: FlowerDetailsData
};

export interface FlowerDetailsData{
  id: number,
  name: string, 
  latin_name: string,
  sightings:number
  profile_picture: string,
  favorite: boolean,
  favoriteId?: number,
  description?: string,
  features?: string[],
}

export interface FavoriteFlower {
  fav_flowers: FavoriteFlowerData[]
}

export interface FavoriteFlowerData {
  id: number,
  user_id: number,
  flower: FlowerDetailsData
}