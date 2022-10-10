import { AxiosResponse } from "axios"
import { getUserSighting } from "../fetch-data/services/sightingService"
import { Sighting } from "./SightingInterface"

export interface LoginInfo {
    email: string
    password: string
}

export interface RegisterInfo {
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    date_of_birth: string
}

export interface UserInfo {
    user: {
        id: number,
        first_name: string,
        last_name: string
    }       
}

export class User {
    private sightings: Sighting[];

    constructor(private id:number, private first_name:string, private last_name:string, private userEmail:string="placeholder@gmail.com", private date_of_birth:string="01.01.2000.")  {
        this.sightings = []
        this.getSightings(id);
    }

    get fullName() {
        return this.first_name + " " + this.last_name; 
    }

    get firstName() {
        return this.first_name; 
    }

    get lastName() {
        return this.last_name; 
    }

    get email() {
        return this.userEmail; 
    }

    get dateOfBirth() {
        return this.date_of_birth;
    }

    get sightingsNum() {
        return this.sightings.length;
    }

    private getSightings = async (id: number) => {
        await getUserSighting(`users/${id}/sightings`)
        .then((res:AxiosResponse) => { 
            const sightings = res.data.sightings;
            sightings.forEach((el:Sighting) => {
                sightings.push(el)
            });
        })
        .catch((err:AxiosResponse) => {
            console.log("UserInfo - getSightings error:")
            console.log(err)
        });
    };
}