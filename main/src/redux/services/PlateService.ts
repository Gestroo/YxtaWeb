import axios from "axios";
import {Answer} from "../../models/RequestModel";
import {AttributeModel} from "../../models/AttributeModel";
import {PlateModel} from "../../models/PlateModel";

const API_URL = "http://localhost:8080/attribute/"
class PlateService {
    getPlates(){
        return axios.get(API_URL + "get-plates",)
            .then((response) => {
                console.log(response.data);
                const data: Answer = response.data;
                if (data.status){
                    const plates: PlateModel[] = data.answer.plates
                    return plates;
                }
                return []
            })
            .catch((error) => {
                console.log(error);
                return []
            });
    }
}
export default new PlateService();