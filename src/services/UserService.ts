import { AxiosResponse } from "axios";

import httpClient from "@/http"
import { IUser } from "@/models/IUser";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return httpClient.get<IUser[]>("/users");
    }
}