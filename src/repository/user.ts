import { config } from "@/config/config";
import axios, { AxiosResponse } from "axios";

export interface IUserCreate {
    email: string;
    password: string;
    businessName: string;
    number: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export class UserRepository {
    private static baseUrl: string = config.serverBaseUrl;

    static async createUser(data: IUserCreate) {
        const response: AxiosResponse<any, any> = await axios.post(
            `${UserRepository.baseUrl}/user/register`,
            data as IUserCreate
        );
        return response;
    }

    static async loginUser(data: IUserLogin) {
        const response: AxiosResponse<any, any> = await axios.post(
            `${UserRepository.baseUrl}/user/login`,
            data as IUserLogin
        );
        return response;
    }
}
