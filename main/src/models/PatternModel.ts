import {User} from "./UserModel";
import {AttributeModel} from "./AttributeModel";

export interface PatternModel {
    id: number,
    title:string,
    description:string
    user: User,
    date:string,
    frequency:number,
    isActive:boolean,
    attributes:AttributeModel[],
}