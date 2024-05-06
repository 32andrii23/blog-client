import { AxiosResponse } from "axios";

import httpClient from "@/http";
import { AuthResponse } from "@/models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return httpClient.post<AuthResponse>("/login", {email, password});
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return httpClient.post<AuthResponse>("/registration", {email, password});
    }

    static async logout(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return httpClient.post<AuthResponse>("/logout");
    }
}