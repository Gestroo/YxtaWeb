import {User} from "./UserModel";
import {AttributeModel} from "./AttributeModel";
import {PlateModel} from "./PlateModel";

export interface ReportModel {

    plates:PlateModel[]
    attributes: AttributeModel[],
    emails: string[],
    dateStart:string,
    dateFinish:string,
}