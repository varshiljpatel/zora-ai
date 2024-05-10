import { config } from "@/config/config";
import axios from "axios";

export interface IUserCreate {
    email: string;
    password: string;
    businessName: string;
    number: string;
}

export class UserRepository {
    private static baseUrl: string = config.serverBaseUrl;

    static async createUser(data: IUserCreate) {
        try {
            const response = await axios.post(
                `${UserRepository.baseUrl}/user/register`,
                data
            );
            return response;
        } catch (error: Error | any) {
            console.log("Something went wrong", error.message);
        }
    }
}
