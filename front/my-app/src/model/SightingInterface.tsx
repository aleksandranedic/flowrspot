export interface Sighting {
  id: number;
  flower_id: number;
  name: string;
  description: string;
  latitude: string;
  longitude: number;
  userId?: number;
  userFullName?: string
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
export interface SightingCommentData {
  comments: SightingComment []
}
export interface SightingComment {
    id: number,
    user_id: number,
    user_full_name: string,
    sighting_id: number,
    content: string
}