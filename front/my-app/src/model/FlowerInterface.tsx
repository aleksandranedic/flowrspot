export interface FlowerList {
  flowers: Flower[];
}

export interface FlowerData {
  flower: Flower
}

export interface Flower {
  id: number;
  name: string;
  latin_name: string;
  sightings: number;
  profile_picture: string;
  favorite: boolean;
}
