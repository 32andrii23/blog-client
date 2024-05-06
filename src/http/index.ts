import axios from "axios";

export const BASE_URL = "https://localhost:3000";

export const httpClient = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
});