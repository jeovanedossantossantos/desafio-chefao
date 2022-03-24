import axios from "axios";
import {API, Authorization} from "./const"
export const api = axios.create({
    baseURL: API ,
    headers: {
        Authorization:Authorization
    }
})

