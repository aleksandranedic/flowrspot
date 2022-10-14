export interface Sighting {
  id: number;
  flower_id: number;
  name: string;
  description: string;
  latitude: string;
  longitude: number;
}

export interface SightingList {
  sightings: Sighting[];
}

export interface SightingDetailsData {
  sightings: SightingDetails[]
}

export interface SightingInfoData {
  sighting: SightingDetails;
}

export interface SightingDetails {
  comments_count: number,
  created_at: string, 
  description: string,
  flower: {id:number, latin_name:string, name:string, profile_picture:string},
  likes_count: number,
  picture: string,
  user: {id:number, full_name:string},
  latitude: number,
  longitude: number,
  id: number,
  name: string
}
