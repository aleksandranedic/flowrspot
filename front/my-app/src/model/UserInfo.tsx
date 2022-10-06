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

export class LogedUser {
    private static logedUser:LogedUser | null = null;
    private static sightings: Sighting[];

    private constructor(private id:number, private first_name:string, private last_name:string, private email:string, private date_of_birth:string)  {}

    public static createLogedUser(id:number, first_name:string, last_name:string, email:string="placeholder@gmail.com", date_of_birth:string="01.01.2022.") {
        LogedUser.logedUser = new LogedUser(id, first_name, last_name, email, date_of_birth);
        LogedUser.sightings = [];
        LogedUser.getSightings(id);
        return LogedUser.logedUser;
    }

    static get fullName() {
        return this.logedUser?.first_name + " " + this.logedUser?.last_name; 
    }

    static get firstName() {
        return this.logedUser?.first_name; 
    }

    static get lastName() {
        return this.logedUser?.last_name; 
    }

    static get email() {
        return this.logedUser?.email; 
    }

    static get dateOfBirth() {
        return this.logedUser?.date_of_birth;
    }

    static get sightingsNum() {
        return this.sightings.length;
    }

    private static getSightings = async (id: number) => {
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

    public static isUserLoged():boolean {
        console.log(this.logedUser)
        return this.logedUser !== null
    } 

    public static logoutUser(): void {
        this.logedUser = null;
    }

}