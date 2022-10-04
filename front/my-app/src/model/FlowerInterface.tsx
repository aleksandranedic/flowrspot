export interface FlowerList {
    flowers : {
        id:	number,
        name:	string,
        latin_name:	string,
        sightings:	number,
        profile_picture:	string,
        favorite:	boolean
    } []
}

export interface Flower {
    flower : {
        id:	number,
        name: string,
        latin_name:	string,
        sightings: number,
        profile_picture: string,
        favorite: boolean
    } 
}