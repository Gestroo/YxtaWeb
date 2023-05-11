import {User} from "./UserModel";

export interface PatternModel {
    id: number,
    title:string,
    description:string
    user: User,
    date:string,
    frequency:number,
    isActive:boolean,
}