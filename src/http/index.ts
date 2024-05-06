import axios from "axios";

export const BASE_URL = "https://localhost:3000";

const httpClient = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
});

httpClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config;
})

export default httpClient;