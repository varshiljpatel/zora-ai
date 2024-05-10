import { config } from "@/config/config";
import axios from "axios";

export interface IUserCreate {
    email: string;
    password: string;
    businessName: string;
    number: string;
}

export class UserRepository {
    static async createUser(data: IUserCreate) {
        console.log(config.serverBaseUrl);

        const response = await axios.post(
            `${config.serverBaseUrl || "http://localhost:8080"}/user/register`,
            data
        );
        console.log(response);
    }
}
