import axios from "axios";
import {Answer} from "../../models/RequestModel";
import {PatternModel} from "../../models/PatternModel";
import {ReportModel} from "../../models/ReportModel";

const API_URL = "http://localhost:8080/pattern/"
class PatternService {
    getPatterns(){
        return axios.get(API_URL + "get-patterns",)
            .then((response) => {
                console.log(response.data);
                const data: Answer = response.data;
                if (data.status){
                    const patterns: PatternModel[] = data.answer.patterns
                    return patterns;
                }
                return []
            })
            .catch((error) => {
                console.log(error);
                return []
            });
    }

    addPattern(data:PatternModel){
        return axios.post(API_URL + "add-pattern",data,)
            .then((response) => {
                const data: Answer = response.data;
                return data.status;
            })
            .catch((error) => {
                console.log(error);
                return false;
            });
    }
    makeReport(data:ReportModel){
        return axios.post(API_URL + "report",data,)
            .then((response) => {
                const data: Answer = response.data;
                return data.status;
            })
            .catch((error) => {
                console.log(error);
                return false;
            });
    }
}
export default new PatternService();