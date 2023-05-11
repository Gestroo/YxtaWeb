import axios from "axios";
import authHeader from "../AuthHeader";
import {Answer} from "../../models/RequestModel";
import {PatternModel} from "../../models/PatternModel";
import {ReportModel} from "../../models/ReportModel";
import {AttributeModel} from "../../models/AttributeModel";

const API_URL = "http://localhost:8080/attribute/"
class AttributeService {
    getAttributes(){
        return axios.get(API_URL + "get-attributes",)
            .then((response) => {
                console.log(response.data);
                const data: Answer = response.data;
                if (data.status){
                    const attributes: AttributeModel[] = data.answer.attributes
                    return attributes;
                }
                return []
            })
            .catch((error) => {
                console.log(error);
                return []
            });
    }
}
export default new AttributeService();