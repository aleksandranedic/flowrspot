export interface Sighting {
    id: number,
    flower_id: number,
    name: string,
    description: string,
    latitude: string,
    longitude: number
}

export interface SightingList {
    sightings : Sighting[]
}