import { endPoint } from "../settings/urls";
import axios from "axios";

export function getInstaStory(params) {
    let _url = `${endPoint.url.Apiurl}${endPoint.insta.stories}`
    return axios.get(_url, { params });
}
