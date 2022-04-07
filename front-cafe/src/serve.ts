import axios from "axios";
import { API } from "./const"

export const api = axios.create({
    baseURL: API,
})

export {}